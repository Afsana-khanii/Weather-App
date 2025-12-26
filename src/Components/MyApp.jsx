import React, { useState } from 'react'
import clouds from '../Images/clouds.png'
import err from '../Images/err.png'
import mist from '../Images/mist.png'
import clear from '../Images/clear.png'
import rain from '../Images/rain.png'
const MyApp=()=>{
    const [search,setSearch]= useState('')
    const [ data,setData]= useState()
   const [error,setError] = useState()
       const API_KEY ="6d83156e4e40ca97d0c6924b832fe00c"
const api = "https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}"
const handleInput=(e)=>{
 setSearch(e.target.value)
 console.log(e.target.value)
}
const myFunc=async()=>{
    const get = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${API_KEY}&units=metric`)
  const jsonData=await get.json()
    console.log(jsonData);
    setData(jsonData);
    if(search == ''){
        setError('please enter valid name')
    }
    if(json.Data.cod == '404'){
        setError('please enter valid name!')
    }else{
        setError("")
    }
    setSearch("");
}    

return(
    <div className = "container">
        <div className = 'inputs'>
            <input placeholder = 'enter city' value = {search} onChange ={handleInput}/>
            <button onClick = {myFunc}>🔍</button>
        </div>
        <div className = 'errorPage'> 
        {error ? <div>
            <p>
             {error}
            </p>
               <img src = {err}/>
             </div> : ""}
             {
            data && data.weather ? 
            <div className = 'weathers'> <h2 className = 'cityName'> {data.name}</h2>
            <img src = {data.weather[0].main=="Clouds" ? clouds:""}/>
             <img src = {data.weather[0].main=="Rain" ? rain :""}/>
              <img src = {data.weather[0].main=="Clear" ? clear :""}/>
               <img src = {data.weather[0].main=="Mist" ? mist :""}/>
                <img src = {data.weather[0].main=="Haze" ? clouds :""}/>
            <h2 className = 'temperature'> {Math.trunc(data.main.temp)}°C</h2>
            <p className = 'climate'> {data.weather[0].description}</p>
            </div> : ""
            
            }
            </div>
    </div>
)
}
export default MyApp;