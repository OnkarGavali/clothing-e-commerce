import React from 'react';
import './App.css';
import { Homepage } from './pages/Homepage/Homepage.component';
import { Route,Switch } from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';

const Hatspage = () => (
  <div>
    <h1>Hats Pages</h1>
  </div>
);


function App() {
  return (
    <div >
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/hats' component={Hatspage}/>
        <Route path='/shop' component={ShopPage}/>
       
      </Switch>
    </div>
  );
}

export default App;
