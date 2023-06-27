import React, { useEffect, useRef, useState} from 'react'
import useFetch from '../hooks/usefetch'
import {useSelector} from'react-redux'
import PokemosContainer from '../assets/components/home/pokedex/PokemosContainer'
import {useNavigate} from'react-router-dom'
import axios from'axios'
const Pokedex = () => {
  const [selectValue,setSelectValue]=useState('all-pokemos')
  const trainerName=useSelector(states=>states.trainerName)
  let url='https://pokeapi.co/api/v2/pokemon?limit=20&offset=0'
  const [pokemos,getAllPokemos,haserror,setPokemons]=useFetch(url)
  const urlTypes='https://pokeapi.co/api/v2/type'
  const [types,getTypes]=useFetch(urlTypes)
 
  useEffect(()=>{
    if(selectValue ==='all-pokemos'){
      getAllPokemos( )
    }else{
      axios.get(selectValue)
      .then(res=>{
        const data={
          results:res.data.pokemon.map(pokeinfo=>pokeinfo.pokemon)
        }
        setPokemons(data)
        
      })
      .catch(err=>console.log(err))
    }
  },[selectValue])

  useEffect(()=>{
    getTypes()
  },[])
  const serchPokemon=useRef()
  const navigate=useNavigate()
  const handlesubmit=e=>{
    e.preventDefault()
    const inputValue=(serchPokemon.current.value.trim().toLowerCase())
    navigate(`/pokedex/${inputValue}`)
  }
  const handleChangeType=e=>{
    setSelectValue(e.target.value)

  }
  return (
    <div>
    <p>Hi, <span>{trainerName}!</span>, you can find your favorite pokemon?</p>
    <form onSubmit={handlesubmit}>
      <input ref={serchPokemon} type="text" />
      <button>Serch</button>
    </form>
    <select onChange={handleChangeType}>
      <option value='all-pokemons'>All Pokemos</option>
      {
        types?.results.map(typeInfo=>(
          <option key={typeInfo.url} value={typeInfo.url}>{typeInfo.name}</option>
        ))
      }

    </select>
    <PokemosContainer pokemos={pokemos?.results}/>
    </div>
    )
}

export default Pokedex