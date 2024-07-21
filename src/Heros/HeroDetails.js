import React from 'react'

const HeroDetails = ({data}) => {
   
  return (
    <div>
      <h2>this is <span style={{color:"red"}}> {data.name}</span> and my new movie is<span style={{color:"blue"}}> {data.movie}</span></h2>
    </div>
  )
}

export default HeroDetails
