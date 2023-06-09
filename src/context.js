import React, { useContext, useEffect, useState } from 'react'
const API_URL=` https://www.omdbapi.com/?i=tt3896198&apikey=785c8af4`;

const AppContext=React.createContext();
const AppProvider =({children})=>{
  const [isLoading,setIsLoading]=useState(true);
  const[page,setPage] = useState(1);
  const[isMore, setIsMore] =  useState(true);
  const [movie,setMovie]=useState([]);
  const [isError,setIsError]=useState({show:"false", msg:""})
  
  const [query,setQuery]=useState("mass");
  const getMpvies=async(url)=>{
    setIsLoading(true);
try{
  const res= await fetch(url);
  const data=await res.json();
  if(data.Response==="True"){
    setIsLoading(false);
    setMovie(data.Search)
  }
  else{  
    setIsMore(false)
    setIsError({
      show:true,
      msg:data.Error,
    })
  }
 
}catch(error){
  console.log(error);
}
  }
  useEffect(()=>{
    let time=setTimeout(()=>{
      getMpvies( `${API_URL}&s=${query}&page=${page}`);
    },2000)
   return ()=> clearTimeout(time);
  },[query,page])
  return <AppContext.Provider value={{query,movie,setQuery,isLoading,isError,page,setPage,isMore }}>
    {children}
  </AppContext.Provider>
};
const useGlobalContext=()=>{
  return useContext(AppContext);
}
export {AppContext,AppProvider,useGlobalContext};
