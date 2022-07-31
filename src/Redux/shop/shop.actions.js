import { ShopActionTypes } from './shop.types.js';

export const setCurrentShop = shop => ({
  type: ShopActionTypes.SET_CURRENT_Shop,
  payload: shop
});
