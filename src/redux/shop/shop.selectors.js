import { createSelector } from 'reselect'

const COLLECTION_ID_MAP = {
  hats: 1,
  sneakers: 2,
  jackets: 3,
  womens: 4,
  mens: 5
}

const selectShop = state => state.shop

export const selectShopCollections = createSelector(
  [selectShop],
  shop => shop.collections
)

// this need lodash memoize added to actually work
export const selectCollection = collectionUrlParam => createSelector(
  [selectShopCollections],
  collections => collections.find(collection => collection.id === COLLECTION_ID_MAP[collectionUrlParam] )
)