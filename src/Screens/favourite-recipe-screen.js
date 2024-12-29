


import React, { useContext } from 'react'
import Navbar from '../navbar/navbars';
import { RecipeContext } from '../Navigations/navigation';
function Favouritescreen() {
    const {favouriteDish,removeFromFavourite}=useContext(RecipeContext)
    const removeHandler=(eachFood)=>{
      removeFromFavourite(eachFood.id)
    }
  return (
    <div> 
      <Navbar/>
      <center><h2>This Is your Favourite Recipes</h2></center>
      {
        favouriteDish.length>0?
        <>
        {
             favouriteDish.map(each=>{
                return(
                    <>
                    <h4>{each.name}</h4>
                    <img src={each.image || "default-image-url"} alt={each.name} height={100} width={100} />
                    <button onClick={()=>removeHandler(each)}>Remove From Favourites</button>
                    </>
                )
            })
        }
        </>:<h5>No Dishes Found</h5>
      }
    </div>
  )
}

export default Favouritescreen;
