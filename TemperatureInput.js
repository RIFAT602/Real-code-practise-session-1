import React from 'react'


const scaleNames={
    c:'Celcius',
    f:'Farenheit'
}



export default function TemperatureInput({scale,temperature,onTemperatureChange}) {
  return (
    <div>
        <fieldset>
            <legend>Enter the temperature in{scaleNames[scale]}</legend>
            <input type="text" value={temperature} onChange={(e)=>onTemperatureChange(e,scale)}></input>
        </fieldset>
    </div>
  )
}
