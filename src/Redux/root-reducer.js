import { combineReducers } from 'redux';
import userReducer from './directory/directory.reducer.js';
import cartReducer from './cart/cart.reducer.js';
import directoryReducer from './directory/directory.reducer.js';
import shopReducer from './shop/shop.reducer.js';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart', 'user', 'shop','directory']
};

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    directory: directoryReducer,
    shop: shopReducer
});

export default persistReducer(persistConfig, rootReducer);
