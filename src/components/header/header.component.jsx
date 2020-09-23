import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

// import './header.styles.scss';
import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink, OptionDiv } from './header.styles.jsx'

import { auth } from '../../firebase/firebase.utils';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component'
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectCartHidden } from '../../redux/cart/cart.selectors';

const Header = ({ currentUser, hidden }) => (
  <HeaderContainer>
    <LogoContainer to='/'>
      <Logo className='logo' />
    </LogoContainer>
    <OptionsContainer>
      <OptionLink to='/shop'>
        SHOP
      </OptionLink>
      <OptionLink to='/shop'>
        CONTACT
      </OptionLink>
      {
        currentUser ?
        <>
        <OptionDiv onClick={() => auth.signOut()}>SIGN OUT</OptionDiv>
        </>
        :
        <OptionLink to='/signin'>SIGN IN</OptionLink>
      }
      <CartIcon/>
    </OptionsContainer>
    {hidden ? null : <CartDropdown />}
  </HeaderContainer>
);

// how to write without structuredselector:
// 
// const bindStoreToProps = store => ({
//   currentUser: selectCurrentUser(store),
//   hidden: selectCartHidden(store)
// })

const bindStoreToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
})

export default connect(bindStoreToProps)(Header);