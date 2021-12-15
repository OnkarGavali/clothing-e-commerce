import { combineReducers } from 'redux'
import cartReducer from './cart/cart.reducer';
import userReducer from './user/user.reducer'
import { persistReducer } from 'redux-persist';


// for local Storage
import storage from 'redux-persist/lib/storage';
import shopReducer from './shop/shop.reducer';
import directoryReducer from './directory/directory.reducer';

// for session storage
//import sessionStorage from 'redux-persist/es/storage/session';

// whilelist content which part to store here we only want cart in local storage
const persistConfig = {
    key:'root',
    storage,
    whitelist : ["cart"]
}

const rootReducer = combineReducers({
    user : userReducer,
    cart : cartReducer,
    shop: shopReducer,
    directory :directoryReducer
});


export default persistReducer(persistConfig,rootReducer);