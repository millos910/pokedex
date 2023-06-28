import {useParams} from'react-router-dom'
import useFetch from '../hooks/usefetch'
import { useEffect } from 'react'
import './styles/pokedexName.css'
const PokedexName = () => {
    const {name}=useParams()
    const url=`https://pokeapi.co/api/v2/pokemon/${name}`
    const [pokemon,getPokemonByName,haserror]=useFetch(url)
    useEffect(()=>{
        getPokemonByName()
    },[name])
  return (
    <div className='descprition__main'>
        {
            haserror
            ? 
            <h1>X_X the pokemon "<span>{name}</span>" doesn't exist</h1>
            :(
                <>
                    <img className='description__img' src={pokemon?.sprites.other['official-artwork'].front_default} alt="" />
        <h1 className='descprition__title'>#{pokemon?.order}</h1>
        <hr />
        <h2 className='descprition__subtitle'>{pokemon?.name}</h2>
        <ul className='descprition__item__mass'>
            <li className='descprition__mass'>weight: {pokemon?.weight}</li>
            <li className='descprition__height'>height: {pokemon?.height}</li>
        </ul>
        <ul className='descprition__type'>
            {
                pokemon?.types.map(type=>(
                    <li className='descprition__value' key={type.type.url}>
                        <span>{type.type.name}</span>
                    </li>
                ))
            }
        </ul>
        <ul className='descprition__ability'>
            {
                pokemon?.abilities.map(abiliti=>(
                    <li className='descprition__value' key={abiliti.ability.url}>
                        <span>{abiliti.ability.name}</span>
                    </li>
                ))
            }
        </ul>
        <h3>Stats</h3>
        <hr />
        <ul className='descprition__stats'>
                {
                    pokemon?.stats.map(statInfo=>(
                        <li className='descprition__value' key={statInfo.stat.url}>
                            <span>{statInfo.stat.name}</span>
                            <span> {statInfo.base_stat} /150</span>
                        </li>))
                }
        </ul>
                </>
            )
        }
    </div>

  )
}

export default PokedexName