import React from 'react'

const RecipeCard = ({recipe}) => {
    const {idMeal ,strMeal,strMealThumb } = recipe
  return (
    <div className='card-container'>
       <img src={strMealThumb} alt={strMeal} className='recipe-image'/>
       <div className='card-items'>
          <h4>{strMeal}</h4>
          <a href={"https://www.themealdb.com/meal/" + idMeal} targer="_blank">Ingredients</a>
       </div>
    </div>

  )
}

export default RecipeCard
