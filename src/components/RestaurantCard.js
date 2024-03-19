import React from 'react'
import "../index.css"

const RestaurantCard = (props) => {
  const {resData} =props;
  const {name, cuisines,avgRating, costForTwo,image} = resData?.data
  // console.log(resData)
  console.log(name)
  
  // console.log(props)
  return (
   
      <div className='res-card' >
        <img className = "res-logo" src={ image}  alt="MCD Logo"/>
        <div>
          <h3>{name}</h3>
          <h3>{cuisines.join(', ')}</h3>
          
          
          <h3>{costForTwo/100}</h3>
          <h3>{avgRating}</h3>
          <h3>ETA 38 Minutes</h3>
        </div>
      </div>

  )
}

export default RestaurantCard
