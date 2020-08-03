import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component.jsx';
import ShopPage from './pages/shop/shop.component';


function App() {
  return (
    <div>
      {
        /**
         * 'exact' prop forces path to be exact, e.g. path="/" would render localhost:3000/ and localhost:3000/hats pages
         * 
         * <Switch> switches views by rendering only the first match
         */
      }
      <Switch>
        <Route exact={true} path="/" component={HomePage}></Route>
        <Route path="/shop" component={ShopPage}></Route>
      </Switch>
    </div>
  )
}

export default App;
