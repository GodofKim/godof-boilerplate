import { types, getParent } from 'mobx-state-tree'
import { ShopStore } from './ShopStore'

export const ViewStore = types
  .model({
    selectedBookId: '',
  })
  .views(self => ({
    get shop(): typeof ShopStore.Type {
      return getParent(self)
    },
  }))
  .views(self => ({
    get isLoading() {
      return self.shop.isLoading
    },
  }))
  .views(self => ({
    get selectedBook() {
      return self.isLoading || !self.selectedBookId
        ? null
        : self.shop.books.get(self.selectedBookId)
    },
  }))
