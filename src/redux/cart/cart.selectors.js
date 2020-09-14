import { createSelector } from 'reselect';

const selectCart = state => state.cart;

// these selectors wont pass new props if the selected values don't change
// memoized selector to prevent repaints
export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce(
      (accumalatedQuantity, cartItem) =>
        accumalatedQuantity + cartItem.quantity,
      0
    )
);