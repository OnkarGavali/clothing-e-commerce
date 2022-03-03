import React from 'react';
import './App.css';
import { Homepage } from './pages/Homepage/Homepage.component';
import { Route, Switch, Redirect } from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';

import { SignInaAndSignUp } from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { addCollectionAndDocuments, auth, createUserProfileDocument } from './firebase/firebase.utlis';
import Header from './components/header/header.component';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';
import { createStructuredSelector } from 'reselect';
import CheckoutPage from './pages/checkout/checkout.component';
import { selectCollectionForPreview } from './redux/shop/shop.selectors';





class App extends React.Component {

  unSubscribeFromAuth = null;
  
  componentDidMount(){
    const { setCurrentUser,collectionsArray } = this.props;

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
      //addCollectionAndDocuments('collections',collectionsArray.map(({title,items}) => ({title,items})));
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
          <Route path='/signIn' render={ () => this.props.currentUser ? (<Redirect to='/' />) : (<SignInaAndSignUp/>)}/>
          <Route excat path='/checkout' component={CheckoutPage}/>
        </Switch>
      </div>
    );
  }
}

// const mapStateToProps = (state) => ({
//   currentUser : selectCurrentUser(state)
// })


const mapStateToProps = createStructuredSelector({
  currentUser : selectCurrentUser,
  collectionsArray : selectCollectionForPreview
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser : user => dispatch( setCurrentUser(user) )
})

export default connect( mapStateToProps, mapDispatchToProps )( App );
