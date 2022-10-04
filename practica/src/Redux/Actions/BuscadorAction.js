import Axios from 'axios';

export const FETCH_POKEMON_REQUEST = 'FETCH_POKEMON_REQUEST';
export const FETCH_POKEMON_SUCCESS = 'FETCH_POKEMON_SUCCESS';
export const FETCH_POKEMON_FAILURE = 'FETCH_POKEMON_FAILURE';

// Actions

export const FetchPokemonRequest = () => {
    return {
        type: FETCH_POKEMON_REQUEST,
    }
}

export const FetchPokemonSuccess = (Pokemon) => {
    return {
        type: FETCH_POKEMON_SUCCESS,
        payload: Pokemon
    }
}

export const FetchPokemonFailure = (error) => {
    return {
        type: FETCH_POKEMON_FAILURE,
        payload: error 
    }
}

const fetchPokemon = (valor) => {
    return (dispatch) => {
        dispatch(FetchPokemonRequest());
        Axios.get(`https://pokeapi.co/api/v2/pokemon/${valor}`)
        .then(response => {
            dispatch(FetchPokemonSuccess([response.data]));
        })
        .catch(error => {
            dispatch(FetchPokemonFailure('No se encontró el Pokemon'))
        });
    }
}

export default fetchPokemon;