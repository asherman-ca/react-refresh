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

export const selectCartHidden = createSelector(
  [selectCart],
  cart => cart.hidden
)

export const selectCartTotal = createSelector(
  [selectCartItems],
  cartItems => cartItems.reduce(
    (acc, cartItem) => acc + cartItem.price * cartItem.quantity, 0
  )
)