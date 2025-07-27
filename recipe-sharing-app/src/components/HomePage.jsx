import SearchBar from './SeacrhBar';
import RecipeList from './RecipeList';

const HomePage = () => {
  return (
    <div>
    <h1>Recipe Sharing App</h1>
      <SearhBar />
      <RecipeList/>
      <FavoriteList/>
      <RecommendationsList/>
    </div>
    );
};

export default HomePage;
