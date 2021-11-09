import React from 'react';
import './App.css';
import { Homepage } from './pages/Homepage/Homepage.component';
import { Route,Switch } from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';

import { SignInaAndSignUp } from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utlis';
import Header from './components/header/header.component';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';




class App extends React.Component {

  unSubscribeFromAuth = null;
  
  componentDidMount(){
    const { setCurrentUser } = this.props;

    this.unSubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
      
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          //console.log(snapShot);//here we metadata about data like exists id ref etc
          //console.log(snapShot.data()); // here we get actual data

          setCurrentUser( {
              id: snapShot.id,
            ...snapShot.data()
            }
          );
          
        })
       
      } else {
        setCurrentUser(userAuth)
      }

    
    })
  }

  componentWillUnmount(){
    this.unSubscribeFromAuth();
  }

  render() {
    return (
      <div >
        <Header/>
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


const mapDispatchToProps = dispatch => ({
  setCurrentUser : user => dispatch( setCurrentUser(user) )
})

export default connect( null, mapDispatchToProps )( App );
