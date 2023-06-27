import { useState } from "react"
import axios from'axios'

const useFetch=(url)=>{
    const[infoApi,setInfoApi]=useState()
    const [hasError,sethasError]=useState(false)
    const getApi=()=>{
        axios.get(url)
        .then(res=>{
            setInfoApi(res.data)
            sethasError(false)
        })
        .catch(err=>{
            sethasError(true)
        })
    }
    return[infoApi,getApi,hasError,setInfoApi]
}
export default useFetch