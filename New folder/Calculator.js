import React, { Component } from 'react'
import TemperatureInput from './TemperatureInput'
import { convert, toCelcius,toFarenheit } from './Converter';

export default class Calculator extends Component {
    state={ temperature:'',scale:'c'
    }
 handleChange=(e,scale)=>{
     this.setState({
         temperature:e.target.value,
         scale
     })

 }


render() {

    const{temperature,scale}=this.state;
    const celcius=scale ==='f'?convert( temperature,toCelcius):temperature;
    const farenheit=scale ==='c'?convert( temperature,toFarenheit):temperature    

        return (
      <div>
         <TemperatureInput scale="c" temperature={celcius} onTemperatureChange={this.handleChange}  />
         <TemperatureInput scale="f" temperature={farenheit} onTemperatureChange={this.handleChange}/>
      </div>
    )
  }
}
