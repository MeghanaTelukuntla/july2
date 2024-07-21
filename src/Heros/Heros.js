import React from 'react'
import HeroDetails from './HeroDetails'

const Heros = () => {
    const names=[
        {name:"NTR",movie:"devara"},
        {name:"PK",movie:"og"} ,
        {name:"PRABHAS",movie:"kalki2"} ,
        {name:"AA",movie:"pushpa2"},
         {name:"Mb",movie:"ssmb29"},
        {name:"NAGARJUNA",movie:"damarukam"} ,
        {name:"CHIRU",movie:"mbbs"} ,
        {name:"RAMCHARAN",movie:"kabaddi"}
    ]
  return (
  <div>
  {names.map((item)=>{
    return(
       <HeroDetails data={item}/>
    )
  })}
  </div>
  )
}

export default Heros
