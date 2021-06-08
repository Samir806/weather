import React from 'react'
import './App.js'
import Form from './components/Form'
import Info from './components/Info'
import Weather from './components/Weather'

let API_KEY = '860467b19e400d1b7713886399b044b1'



class App extends React.Component{


  state = {
    city: '',
    country: '',
    tempiratura: '',
    description: '',
    wind: "",
    error: ""
   
  }

  getWeather = async (e)=>{
    e.preventDefault()
    const city = e.target.elements.city.value
  
  
    if(city){
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&lang=ru`
        const start = await fetch(url)
        const data = await start.json()
        console.log(data);
    
        var temp = data.main.temp
        temp = Math.round(temp - 273.15) 
        
   this.setState({
      city: data.name,
      country: data.sys.country,
      description: data.weather[0].description,
      tempiratura: temp,
      wind: data.wind.speed,
      error: ''
    }) 
  }
  else{
    this.setState({
      city: '',
      country: '',
      tempiratura: '',
      description: '',
      pressure: "",
      icon: '',
      error: "Введите название города"
    }) 
  }

}

  

  render(){
    return(
      <div className='wrapper'>
        <Info />
        <Form weatherMethod = {this.getWeather}/>
        <Weather 
            city = {this.state.city}
            country= {this.state.country} 
            temp = {this.state.tempiratura}
            wind= {this.state.wind}
            error = {this.state.error}
        
        />
      </div>
  )
}}

export default App
