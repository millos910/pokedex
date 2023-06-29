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
        <header className='header-red'>
            <h1>
            <img className='header__img__description' src="https://1.bp.blogspot.com/-0V4itR_v87M/UtsCF-ehNYI/AAAAAAAABjU/UEQ5Jiy_85o/s1600/pokedex-3d-logo.png" alt="img principal" />
            </h1>
            <h2 className='header-yellow'>
                black
            </h2>
        </header>
        <div className='card__info'>
        {
            haserror
            ? 
            <h1>X_X the pokemon "<span>{name}</span>" doesn't exist</h1>
            :(
                <>
                <article className={`descrition__main__card ${pokemon?.types[0].type.name}`}>
                <header className={`description_title__header hg_${pokemon?.types[0].type.name}`}>
                    <img className='description__img' src={pokemon?.sprites.other['official-artwork'].front_default} alt="" />
                </header>
        <h1 className='descprition__title'>#{pokemon?.order}</h1>
        <br /><hr className='br__title'/>
        <h2 className='descprition__subtitle'>{pokemon?.name}</h2>
        <ul className='descprition__item__mass'>
            <li className='descprition__mass'>weight <br />{pokemon?.weight}</li>
            <li className='descprition__height'>height <br />{pokemon?.height}</li>
        </ul>
        <div className='type__every'>
        <h3>TYPE :</h3>
        <ul className='descprition__type__pokemon'>
            {
                pokemon?.types.map(type=>(
                    <li className='descprition__value' key={type.type.url}>
                        
                        <span className='type__separate'>{type.type.name}</span>
                        
                    </li>
                ))
            }
        </ul>
        <h3>HABILITY :</h3>
        <ul className='descprition__ability'>
            
            {
                pokemon?.abilities.map(abiliti=>(
                    <li className='descprition__value' key={abiliti.ability.url}>
                        <span>{abiliti.ability.name}</span>
                    </li>
                ))
            }
        </ul>
        </div>
        <h3>Stats</h3>
        <hr />
        <ul className='descprition__stats'>
                {
                    pokemon?.stats.map(statInfo=>(
                        <li className='descprition__value__stats' key={statInfo.stat.url}>
                            <div className='barra__stats1'><span>{statInfo.stat.name}</span></div>
                            <div className='barra__stats2'><span className='barra__principal'> {statInfo.base_stat} /150</span></div>
                        </li>))
                }
        </ul>
        </article>
                </>
            )
        }
        </div>
    </div>
    
  )
}

export default PokedexName