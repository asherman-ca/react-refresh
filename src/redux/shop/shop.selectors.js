import { createSelector } from 'reselect'

const selectShop = state => state.shop

export const selectShopCollections = createSelector(
  [selectShop],
  shop => shop.collections
)

// this need lodash memoize added to actually work
export const selectCollection = collectionUrlParam => createSelector(
  [selectShopCollections],
  collections => collections[collectionUrlParam]
)