import React, { useEffect } from 'react'
import useFetch from '../../../../hooks/usefetch'
import {useNavigate} from 'react-router-dom'
import './styles/pokecard.css'
const PokeCard = ({url}) => {
    const [pokemon,getPokemonById]=useFetch(url)
    useEffect(()=>{
        getPokemonById()
    },[])
    const navigate=useNavigate()
    const handleNavigate=()=>{
        navigate(`/pokedex/${pokemon.name}`)
    }
    return (
    <article className='pokecard' onClick={handleNavigate}>
        <header className='pokecard__header'>
            <img className='pokecard__img' src={pokemon?.sprites.other['official-artwork'].front_default} alt="" />
        </header>
        <section className='pokecard__body'>
            <h3 className='pokecard__name'>{pokemon?.name}</h3>
            <ul className='pokecard__types'>
                {
                    pokemon?.types.map(typeinfo=> (
                        <li className='pokecard__type_item' key={typeinfo.type.url}>{typeinfo.type.name}</li>
                    ))
                }
            </ul>
        </section>
        <footer className='pokecard__footer'>
            <ul className='pokecard__stats'>
                {
                    pokemon?.stats.map(statInfo=>(
                        <li className='pokecard__stats_item' key={statInfo.stat.url}>
                            <span className='pokecard__stats_label'>{statInfo.stat.name}</span>
                            <span className='pokecard__stats_value'>{statInfo.base_stat}</span>
                        </li>
                    ))
                }
            </ul>
        </footer>
    </article>
  )
}
export default PokeCard