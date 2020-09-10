import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component.jsx';
import Header from './components/header/header.component.jsx';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

class App extends React.Component {
  constructor(){
    super()

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null

  componentDidMount(){
    // this connection stays open as long as the application component is mounted
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async user => {
      // this.setState({ currentUser: user })
      createUserProfileDocument(user);
      // console.log(user)
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <div>
        <Header
          currentUser={this.state.currentUser}
        />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInAndSignUpPage} />
        </Switch>
      </div>
    )
  }
}

export default App;