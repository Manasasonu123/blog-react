import {useState,useEffect} from "react"
const useFetch = (url) => {

    const [data,setData]=useState(null)
    const [isPending,setIsPending]=useState(true)
    const [error,setError] =useState(null)
  
    useEffect(()=>{
      const abortCont=new AbortController()

        setTimeout(()=>{
          fetch(url,{signal:abortCont.signal})
        .then(res =>{
          // console.log(res)
          if(!res.ok){
             throw Error('Could not fetch data')
          }
         return res.json()
        })
        .then(data=>{
         console.log(data)
         setData(data)
         setIsPending(false)
         setError(null)
        })
        .catch((err)=>{
          if(err.name==='AbortError'){
            console.log('fetch aborted')
          }else{
          setIsPending(false)
          setError(err.message)
          }
         // console.log(err.message)  //It automatically finds error and displays it
        })
        },1000)    //It is just to see the loading and makes user to wait 1000s
         return ()=>abortCont.abort()
      },[url])  //Dont do it in real
     
      return {data,isPending,error}//Its better to keep them as object than array
     //to avoid ordering
}

export default useFetch