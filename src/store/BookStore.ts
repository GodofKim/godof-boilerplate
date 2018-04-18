import { types, getParent, flow } from 'mobx-state-tree'

export const Book = types.model('Book', {
  id: types.identifier(),
  name: types.string,
  author: types.string,
  price: types.number,
  isAvailable: true,
})

// Due to the way typeof operator works, when working with big and deep models trees,
// it might make your IDE/ts server takes a lot of CPU time and freeze vscode (or others)
// A partial solution for this is to turn the .Type into an interface.
type IBookType = typeof Book.Type
export interface IBook extends IBookType {}

export const BookStore = types
  .model('BookStore', {
    isLoading: true,
    books: types.map(Book),
  })
  .views(self => ({
    get shop() {
      return getParent(self)
    },
    get sortedAvailableBooks() {
      return self.books
        .values()
        .filter(b => b.isAvailable)
        .sort((a, b) => (a.name > b.name ? 1 : a.name === b.name ? 0 : -1))
    },
  }))
  .actions(self => {
    function markLoading(loading: boolean) {
      self.isLoading = loading
    }

    function updateBooks(json: any) {
      self.books.values().forEach(book => (book.isAvailable = false))
      json.forEach((bookJson: IBook) => {
        self.books.put(bookJson)
        const book = self.books.get(bookJson.id + '')

        // Typescript: strictNullChecks mode => You must check whether it is null or undefined
        if (book) {
          book.isAvailable = true
        }
      })
    }

    const loadBooks = flow(function* loadBooks() {
      try {
        const json = yield self.shop.fetch('/books.json')
        updateBooks(json)
        markLoading(false)
      } catch (err) {
        console.error('Failed to load books', err)
      }
    })

    return {
      updateBooks,
      loadBooks,
    }
  })
