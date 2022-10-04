import { combineReducers } from 'redux';
import Buscador from './BuscadorReducer.js';
import game_shop from './gameShopReducers.js';

const rootReducers = combineReducers({
    game_shop, 
    Buscador
});

export default rootReducers;