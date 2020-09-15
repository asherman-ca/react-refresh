import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import './cart-dropdown.styles.scss';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';

// connect wasnt passed a 2nd argument so it automatically passed dispatch for 1 off calls
const CartDropdown = ({ cartItems, history, dispatch }) => (
  <div className='cart-dropdown'>
    <div className='cart-items'>
      {
        cartItems.length ?
        cartItems.map(cartItem => (
        <CartItem key={CartItem.id} item={cartItem} />
        )) : (
        <span className="empty-message">Your Cart is Empty</span> )
      }
    </div>
    <CustomButton onClick={() => {
      history.push('/checkout');
      dispatch(toggleCartHidden());
    }}>
      GO TO CHECKOUT
    </CustomButton>
  </div>
);

// const bindStoreToProps = state => ({
//   cartItems: selectCartItems(state)
// })

const bindStoreToProps = createStructuredSelector({
  cartItems: selectCartItems
})

// if we dont supply a 2nd argument, connect with automatically pass dispatch as a prop
export default withRouter(connect(bindStoreToProps)(CartDropdown));