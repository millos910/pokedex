import React, { useEffect } from 'react'
import useFetch from '../../../../hooks/usefetch'

const PokeCard = ({url}) => {
    const [pokemon,getPokemonById]=useFetch(url)
    useEffect(()=>{
        getPokemonById()
    },[])
    return (
    <article>
        <header>
            <img src={pokemon?.sprites.other['official-artwork'].front_default} alt="" />
        </header>
    </article>
  )
}

export default PokeCard