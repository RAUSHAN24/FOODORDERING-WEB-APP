import React ,{useState} from 'react'
import RestaurantCard from "./RestaurantCard";
import restList from "../utils/MockData";
// console.log(restList)
const Body = () => {
  const[restaurantList, setRestaurantList] = useState(restList);
  return (
    <div className='body'>
      <div className='search'>
        <button className='filtered' onClick={()=> {
          let filteredList = restaurantList.filter((result) => result.data.avgRating > 4)
          setRestaurantList(filteredList)
        }}>Filter Button</button>
      </div>
      <div className='res-container'>
     
      {
        restaurantList.map((res) => { return ( <RestaurantCard key={res.data.id} resData= {res}/> )
         
        })
      }

      </div>
      
      
    </div>
  )
}

export default Body
