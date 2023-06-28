import { useRef } from 'react'
import { setTrainerNameG } from '../store/slices/trainerName'
import {useDispatch,useSelector} from'react-redux'
import {useNavigate} from'react-router-dom'
import './styles/home.css'
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
    <div className='home__main'>
        <header className='home__header'>
          <img className='home__img' src="https://1.bp.blogspot.com/-0V4itR_v87M/UtsCF-ehNYI/AAAAAAAABjU/UEQ5Jiy_85o/s1600/pokedex-3d-logo.png" alt="img principal" />
        </header>
        <h2 className='home__text'>Hi trainer !</h2>
        <p className='home__text__p'>To start in this app, please, give me your trainner name.</p>
        <form onSubmit={handleSubmit}>
            <input ref={trainerNameRef} type="text"/>
            <button>Catch them all!</button>
        </form>
        <footer className='home__footer'>
          <h4>Created By Emilio Montero</h4>
        </footer>
    </div>
  )
}

export default Home