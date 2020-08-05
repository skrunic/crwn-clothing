// Libraries
import React from 'react';

import { auth, createUserProfileDoc } from './firebase/firebase.utils';

// Components
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

// Styles
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
      
      if(userAuth){  
        const userRef = await createUserProfileDoc(userAuth);
        
        userRef.onSnapshot(snapShot => {
          this.setState({ 
            id: snapShot.id,
            ...snapShot.data()
          });

          console.log(this.state);
        });
      }

      this.setState({ currentUser: null });

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
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact={true} path="/" component={HomePage}></Route>
          <Route path="/shop" component={ShopPage}></Route>
          <Route path="/signin" component={SignInAndSignUpPage}></Route>
        </Switch>
      </div>
    )
  }
}

export default App;
