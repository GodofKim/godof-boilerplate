import { when, reaction } from 'mobx'
import { types, getParent, getSnapshot, applySnapshot } from 'mobx-state-tree'
import { Book, IBook } from './BookStore'

const CartEntry = types
  .model('CartEntry', {
    quantity: 0,
    book: types.reference(Book),
  })
  .views(self => ({
    get price() {
      return self.book.price * self.quantity
    },
    get isValidBook() {
      return self.book.isAvailable
    },
  }))
  .actions(self => ({
    increaseQuantity(amount: number) {
      self.quantity += amount
    },
    setQuantity(amount: number) {
      self.quantity = amount
    },
  }))

export const CartStore = types
  .model('CartStore', {
    entries: types.array(CartEntry),
  })
  .views(self => ({
    get shop() {
      return getParent(self)
    },
    get subTotal(): number {
      return self.entries.reduce((sum, e) => sum + e.price, 0)
    },
    get canCheckout() {
      return (
        self.entries.length > 0 &&
        self.entries.every(entry => entry.quantity > 0 && entry.isValidBook)
      )
    },
  }))
  // Typescript complain that self.subTotal is not a known property.
  // Making another views block is a solution for that.
  .views(self => ({
    get hasDiscount() {
      return self.subTotal >= 100
    },
  }))
  .views(self => ({
    get discount(): number {
      return self.subTotal * (self.hasDiscount ? 0.1 : 0)
    },
  }))
  .views(self => ({
    get total() {
      return self.subTotal - self.discount
    },
  }))
  .actions(self => ({
    readFromLocalStorage() {
      const cartData = window.localStorage.getItem('cart')
      if (cartData) {
        applySnapshot(self, JSON.parse(cartData))
      }
    },
    addBook(book: IBook, quantity = 1, notify = true) {
      let entry = self.entries.find(entry => entry.book === book)
      if (!entry) {
      }
    },
  }))
  .actions(self => ({
    afterAttach() {
      if (typeof window !== 'undefined' && window.localStorage) {
        when(
          () => !self.shop.isLoading,
          () => {
            self.readFromLocalStorage()
            reaction(
              () => getSnapshot(self),
              json => {
                window.localStorage.setItem('cart', JSON.stringify(json))
              },
            )
          },
        )
      }
    },
  }))
