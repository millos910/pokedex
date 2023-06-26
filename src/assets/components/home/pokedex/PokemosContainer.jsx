import React from 'react'
import PokeCard from './PokeCard';

const PokemosContainer = ({pokemos}) => {
    console.log(pokemos);
  return (
    <div>
        {
            pokemos?.map(pokemon=>(<PokeCard key={pokemon.url} url={pokemon.url}/>  ))
        }
    </div>
  )
}

export default PokemosContainer