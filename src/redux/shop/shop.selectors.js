import { createSelector } from 'reselect'

const selectShop = state => state.shop

export const selectCollections = createSelector(
  [selectShop],
  shop => shop.collections
)

// this turns an object into an array
export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  collections => collections ? Object.keys(collections).map(key => collections[key]) : []
)

// this need lodash memoize added to actually work
export const selectCollection = collectionUrlParam => createSelector(
  [selectCollections],
  collections => collections ? collections[collectionUrlParam] : null
)

export const selectIsCollectionFetching = createSelector(
  [selectShop],
  shop => shop.isFetching
)

// double !! returns the boolean value of that data type, if collections is loaded and returns an object we'll get true. if null then false
export const selectIsCollectionsLoaded = createSelector(
  [selectShop],
  shop => !!shop.collections
)