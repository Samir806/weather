import React from 'react'

let Weather = props=>(
    <div>
         {props.city &&
            <div>
                <p>Город: {props.city}</p>
                <p>Страна: {props.country}</p>
                <p>Температура: {props.temp}</p>
                <p>Скорость ветра: {props.wind}</p>
            </div>
         }
            <p>{props.error}</p>
          </div>
)

export default Weather