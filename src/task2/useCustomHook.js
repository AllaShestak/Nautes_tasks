import axios from "axios";
import {useEffect, useState} from "react";


const useCustomHook = (url)=> {
 const [data,setData] = useState([])
 const [error,setError] = useState(null)
 const [loading,setLoading] = useState(false)

 useEffect(() => {
  (
      async function(){
       try{
        setLoading(true)
        const response = await axios.get(url)

           /* const returnData = [];
        for (const responseElement of response.data) {
         returnData.push( responseElement.title)
        }*/

// slice added limit off elements on the page
        setData(response.data.slice(0, 10))
       }catch(err){
        setError(err)
       }finally{
        setLoading(false)
       }
      }
  )()
 }, [url])

 return [ data, error, loading ]

}

export default useCustomHook