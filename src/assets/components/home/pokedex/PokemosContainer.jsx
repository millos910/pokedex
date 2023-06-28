import React from 'react'
import PokeCard from './PokeCard';
import './styles/pokemoncontainer.css';
const PokemosContainer = ({pokemos}) => {
    console.log(pokemos);
  return (
    
    <div className='container__pokemon'>
        {
          pokemos?.map(pokemon=>(<PokeCard key={pokemon.url} url={pokemon.url}/>  ))
        }
    </div>
    
  )
}

export default PokemosContainer