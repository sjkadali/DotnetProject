import { AddRecipe } from "./components/AddRecipe";
import { Counter } from "./components/Counter";
import { FetchData } from "./components/FetchData";
import { Home } from "./components/Home";
import ShowRecipes from "./components/ShowRecipes";


const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/counter',
    element: <Counter />
  },
  {
    path: '/fetch-data',
    element: <FetchData />
  },
  {
    path: '/show-recipes',
    element: <ShowRecipes />
  },
  {
    path: '/add-recipe',
    element: <AddRecipe />
  }
];

export default AppRoutes;
