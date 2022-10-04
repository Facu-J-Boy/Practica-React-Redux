import { BUY_POKEMON } from "../Actions/gameShopAction";
import { RETURN_POKEMON } from "../Actions/gameShopAction";

const defaul_game_shop = {
    pokemon: 30
};

const game_shop = (state = defaul_game_shop, action) => {
    switch(action.type) {
        case BUY_POKEMON: {
            return {
                ...state,
                pokemon: state.pokemon - action.payload
            }
        }
        case RETURN_POKEMON: {
            return {
                ...state,
                pokemon: state.pokemon + action.payload
            }
        }
        default: return {...state}
    }
}

export default game_shop;