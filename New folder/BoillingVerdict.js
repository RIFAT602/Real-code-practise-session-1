import React from 'react'

export default function BoillingVerdict({celcius=0}) {
  if(celcius>=0){
      return <p>the water will boil</p>
  }
  return <p>the water will not boil</p>
}
