import React, { useEffect, useRef, useState} from 'react'
import useFetch from '../hooks/useFetch'
import {useSelector} from'react-redux'
import PokemosContainer from '../assets/components/home/pokedex/PokemosContainer'
import {useNavigate} from'react-router-dom'
import axios from'axios'
import './styles/pokedex.css'
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
    <div className='navigator'>
      <header className='text__header'>
        <img className='header__img' src="https://reader.digitalbooks.pro/content/preview/books/42131/book/OEBPS/image/Header.jpg" alt="HEADER" />
        <h1 className='h1-header'>Pokedex API</h1>
      </header>
      <div className='serch_section'>
        <p className='serch_text'><span className='span__first__text'>Welcome, {trainerName}!</span>, you can find your favorite pokemon?</p>
        <form className='serch_form' onSubmit={handlesubmit}>
          <input ref={serchPokemon} type="text"/>
          <button>Serch</button>
        </form>
      </div>
      <div className='select__container'> 
      <select className='selector' onChange={handleChangeType}>
        <option value='all-pokemons'>All Pokemos</option>
        {
          types?.results.map(typeInfo=>(
            <option key={typeInfo.url} value={typeInfo.url}>{typeInfo.name}</option>
          ))
        }
      </select>
    </div>
    <PokemosContainer pokemos={pokemos?.results}/>
    </div>
    )
}

export default Pokedex