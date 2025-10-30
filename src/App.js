import { useState} from 'react';
import './App.css';
import SearchBar from './MyComponent/SearchBar'
import RecipeCard from './MyComponent/RecipeCard';

const searchApi = "https://www.themealdb.com/api/json/v1/1/filter.php?i="


function App() {
  const [isLoading,setLoading] = useState(false)
  const [userInput,setUserInput] = useState("")
  const [recipes,setRecipes] = useState([])

  const searchRecipes = async () => {
    if (!userInput.trim()) return; // Prevent empty search
    setLoading(true);

    try {
      const res = await fetch(searchApi + userInput);
      const data = await res.json();

      if (data.meals) {
        setRecipes(data.meals);
      } else {
        setRecipes([]);
      }
    } catch (error) {
      console.error("Error fetching recipes:", error);
      setRecipes([]);
    }

    setLoading(false);
  };

  const submit = (event) => {
    event.preventDefault();
    searchRecipes();
  };

    
    /*
     const url = apiUrl + userInput;
     const response = await fetch(url)
     const data = await response.json()
     console.log(data)
     setRecipes(data.meals)
     setLoading(false)
  }

  useEffect( ()=>{
    searchRecipe()
  },[])

  const submit = event => {
    event.preventDefault()
    searchRecipe()
  }
    */

  return (
    <div className="container">
       <h3>Recipe App</h3>
       <p className="subtitle">Find recipes based on what ingredients you have!</p>

       <SearchBar submit={submit} onChange={event=>setUserInput(event.target.value)}
        value = {userInput}
        isLoading = {isLoading}/>

        {isLoading && <p>Loading recipes...</p>}
        {!isLoading && recipes.length === 0 && userInput && <p>No recipes found for "{userInput}".</p>}

       <div className='recipes'>
          {!isLoading ? recipes.map(recipe=>(
            <RecipeCard key={recipe.idMeal} recipe={recipe}/>

          )): "No Recipes!" }
       </div>
    </div>
  );
}

export default App;
