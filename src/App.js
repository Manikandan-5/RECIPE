
import './App.css';
import React, { useState } from 'react';
import axios from 'axios';
import { Home } from './pages/Home';
import RecipeList from './components/RecipeList';
import Search from './components/Search';
import { Footer } from './components/Footer';

function App() {
  const [recipes, setRecipes] = useState([]);

  const APP_ID = '3f94c30f';
  const APP_KEY = '36956c287e5b701f5541f5ce0c00b253';
  const getRecipes = async (query) => {
    const result = await axios.get(
        `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    setRecipes(result.data.hits);
};
  return (
   <>
    <Home onSearch={getRecipes}/>
    <Search/>
     <RecipeList recipes={recipes} />
     <Footer/>
   </>
  );
}

export default App;
