import axios from 'axios';

import { useEffect, useState } from 'react'

const useChook = (url) => {
    const [data, setData] = useState([]); 
    useEffect(()=>{
    axios.get((url)).then((res)=>{
        setData(res.data)
    }).catch((e)=>{
        console.log(e);
    })
//    fetch(url)
//    .then((res)=>res.json())
//    .then((data)=>setData(data))
//    .catch((e)=>console.log(e))


    })
  return data
}

export default useChook;