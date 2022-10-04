import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
// import CantidadPokemon from './Components/CantidadPokemons';
// import CompraPokemon from './Components/CompraPokemons';

import { Provider } from 'react-redux';
import store from './Redux/Store';
import CantidadPokemonHook from './Components/CantidadPokemons.Hook';
import CompraPokemonHook from './Components/CompraPokemons.Hook';
import BuscadorPokemon from './Buscador/BuscadorPokemon';
import ResultadoPokemon from './Buscador/ResultadoPokemon';

function App() {
  return (
    <Provider store = {store}>
     <div className="App container">
       <div className= 'row'>
         <div className= 'col-12'>
           <div className= 'card mt-5' style={{maxWidth: '370px'}}>
             <div className= 'row no-gutters'>
               <div className= 'col-4'>
                 <img src={require('./img/pokemon.jpg')} alt= 'pokemon' className= 'card-img'/>
               </div>
               <div className= 'col-8'>
                 <div className= 'card-body'>
                   <div className= 'card-title h3 text-center'>
                     <CantidadPokemonHook />
                   </div>
                   <CompraPokemonHook />
                 </div>

               </div>
             </div>
           </div>
         </div>
         <div className='col-12 mt-4 border-top pt-3'>
          <BuscadorPokemon />
         </div>
         <div className= 'col-12'>
          <ResultadoPokemon />
         </div>
       </div>      
     </div>
    </Provider>
  );
}

export default App;
