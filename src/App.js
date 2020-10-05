import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'

import './App.css';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component.jsx';
import Header from './components/header/header.component.jsx';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import CheckoutPage from './pages/checkout/checkout.component';

class App extends React.Component {

  unsubscribeFromAuth = null

  componentDidMount(){
    const { setCurrentUser } = this.props;
    // this connection (onAuthStateChanged) stays open as long as the application component is mounted. Always listening/reactive despite being in didMount
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      // userAuth is null if no one is signed in
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)

        // onsnapshot behaves in the same manner as onauthstatechanged above
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          })
          // this.setState({
          //   currentUser: {
          //     id: snapShot.id,
          //     ...snapShot.data()
          //   }
          //   // setstate is async and requires console log to be called in this manner to avoid sync problems
          // }, () => console.log(this.state))
        })
      } else { 
      // userAuth is null if no one is signed in, which is default state
        setCurrentUser(userAuth)
      }
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
    const {currentUser} = this.props;

    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/checkout' component={CheckoutPage} />
          <Route 
            exact path='/signin' 
            render={() => 
              currentUser ?
              ( <Redirect to='/' /> ) : 
              ( <SignInAndSignUpPage /> )
            }
          />
        </Switch>
      </div>
    )
  }
}

// const bindStoreToProps = store => ({
//   currentUser: selectCurrentUser(store)
// })

const bindStoreToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const bindActionToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(bindStoreToProps, bindActionToProps)(App);