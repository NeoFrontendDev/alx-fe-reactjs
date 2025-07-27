import SearchBar from './SeacrhBar';
import RecipeList from './RecipeList';

const HomePage = () => {
  return (
    <div>
    <h1>All Recipes</h1>
      <SearhBar />
      <RecipeList/>
    </div>
    );
};

export default HomePage;
