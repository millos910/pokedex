import { useRef } from 'react'
import { setTrainerNameG } from '../store/slices/trainerName'
import {useDispatch,useSelector} from'react-redux'
import {useNavigate} from'react-router-dom'
const Home = () => {
    const trainerNameRef=useRef()
    const navigate=useNavigate()
    const {trainerName}=useSelector(states=>states)
    const dispatch=useDispatch()
    const handleSubmit= e =>{
        e.preventDefault()
        dispatch(setTrainerNameG(trainerNameRef.current.value.trim()))
        navigate('/Pokedex')
    }
    console.log(trainerName);
    
  return (
    <div>
        <h1>Pokedex</h1>
        <h2>Hi trainer</h2>
        <p>To start in this app, please, give me your trainner name.</p>
        <form onSubmit={handleSubmit}>
            <input ref={trainerNameRef} type="text"/>
            <button>Catch them all!</button>
        </form>
    </div>
  )
}

export default Home