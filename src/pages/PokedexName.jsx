import {useParams} from'react-router-dom'
import useFetch from '../hooks/usefetch'
import { useEffect } from 'react'
const PokedexName = () => {
    const {name}=useParams()
    const url=`https://pokeapi.co/api/v2/pokemon/${name}`
    const [pokemon,getPokemonByName]=useFetch(url)
    useEffect(()=>{
        getPokemonByName()
    },[name])
    console.log(pokemon);
  return (
    <div>
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
    </div>

  )
}

export default PokedexName