import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { toggleCartHidden } from '../../redux/cart/cart.actions'
import { selectCartItemsCount } from '../../redux/cart/cart.selectors'
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'

import './cart-icon.styles.scss'

const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <ShoppingIcon className='shopping-icon'/>
    <span className="item-count">{itemCount}</span>
  </div>
)

const bindActionToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
})

// memoized selector used here
const bindStoreToProps = createStructuredSelector({
  itemCount: selectCartItemsCount
})

export default connect(bindStoreToProps, bindActionToProps)(CartIcon)