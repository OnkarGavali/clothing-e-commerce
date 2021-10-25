import React from 'react';
import './App.css';
import { Homepage } from './pages/Homepage/Homepage.component';
import { Route,Switch } from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import { Header } from './components/header/header.component';
import { SignInaAndSignUp } from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth } from './firebase/firebase.utlis';




class App extends React.Component {
  constructor(){
    super();

    this.state={
      currentUser: null
    }
  }


  unSubscribeFromAuth = null;
  
  componentDidMount(){
    this.unSubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({currentUser:user});

      console.log(user);
    })
  }

  componentWillUnmount(){
    this.unSubscribeFromAuth();
    console.log('a');
  }

  render() {
    return (
    <div >
      <Header currentUser={this.state.currentUser}/>
      <Switch>
        <Route exact path='/' component={Homepage} />
        {/* <Route path='/hats' component={Hatspage}/> */}
        <Route path='/shop' component={ShopPage}/>
        <Route path='/signIn' component={SignInaAndSignUp}/>
      </Switch>
    </div>
  );
}
}
export default App;
