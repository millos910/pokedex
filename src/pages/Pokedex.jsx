import React, { useEffect } from 'react'
import useFetch from '../hooks/usefetch'
import {useSelector} from'react-redux'
import PokemosContainer from '../assets/components/home/pokedex/PokemosContainer'
const Pokedex = () => {
  const trainerName=useSelector(states=>states.trainerName)
  const url='https://pokeapi.co/api/v2/pokemon?limit=20&offset=0'
  const [pokemos,getAllPokemos]=useFetch(url)
  useEffect(()=>{
    getAllPokemos()
  },[])
  console.log(pokemos);
  return (
    <div>
    <p>Hi, <span>{trainerName}!</span>, you can find your favorite pokemon?</p>
    <PokemosContainer pokemos={pokemos?.results}/>
    </div>
    )
}

export default Pokedex