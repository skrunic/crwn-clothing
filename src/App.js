// Libraries
import React from 'react';

import { Switch, Route, Redirect } from 'react-router-dom';

import { auth, createUserProfileDoc } from './firebase/firebase.utils';

import { connect } from 'react-redux';

// Components
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

// Styles
import './App.css';

import { setCurrentUser } from './redux/user/user.actions'

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount(){
    const { setCurrentUser } = this.props; // destructure action creator from props
    this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
      
      if(userAuth){  
        const userRef = await createUserProfileDoc(userAuth);
        
        userRef.onSnapshot(snapShot => {
          setCurrentUser({ 
              id: snapShot.id,
              ...snapShot.data()
          });
        });
      }

      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        {
          /**
           * 'exact' prop forces path to be exact, e.g. path="/" would render localhost:3000/ and localhost:3000/hats pages
           * 
           * <Switch> switches views by rendering only the first match
           */
        }
        <Header />
        <Switch>
          <Route exact={true} path="/" component={HomePage}></Route>
          <Route path="/shop" component={ShopPage}></Route>
          <Route 
            exact 
            path="/signin"
            render={() => 
              this.props.currentUser ? 
                (<Redirect to="" />) : 
                (<SignInAndSignUpPage />)
            }></Route>
        </Switch>
      </div>
    )
  }
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
});

const mapDispatchToProps = dispatch => ({
  // Action 
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

// Only pass mapDispatchToProps because the component doesn't need currentUser data from the state
// Reducer will read state value and update it 
export default connect(mapStateToProps, mapDispatchToProps)(App);
