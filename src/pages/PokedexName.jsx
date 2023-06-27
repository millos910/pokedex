import {useParams} from'react-router-dom'
import useFetch from '../hooks/usefetch'
import { useEffect } from 'react'
const PokedexName = () => {
    const {name}=useParams()
    const url=`https://pokeapi.co/api/v2/pokemon/${name}`
    const [pokemon,getPokemonByName,haserror]=useFetch(url)
    useEffect(()=>{
        getPokemonByName()
    },[name])
  return (
    <div>
        {
            haserror
            ? 
            <h1>X_X the pokemon "<span>{name}</span>" doesn't exist</h1>
            :(
                <>
                    <img src={pokemon?.sprites.other['official-artwork'].front_default} alt="" />
        <h1>#{pokemon?.order}</h1>
        <h2>{pokemon?.name}</h2>
        <ul>
            <li>weight: {pokemon?.weight}</li>
            <li>height: {pokemon?.height}</li>
        </ul>
        <ul>
            {
                pokemon?.types.map(type=>(
                    <li key={type.type.url}>
                        <span>{type.type.name}</span>
                    </li>
                ))
            }
        </ul>
        <ul>
            {
                pokemon?.abilities.map(abiliti=>(
                    <li key={abiliti.ability.url}>
                        <span>{abiliti.ability.name}</span>
                    </li>
                ))
            }
        </ul>
        <h3>Stats</h3>
        <ul>
                {
                    pokemon?.stats.map(statInfo=>(
                        <li key={statInfo.stat.url}>
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