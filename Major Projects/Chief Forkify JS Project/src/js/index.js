import Search from "./models/Search";
import Recipe from "./models/Recipe";
import * as searchView from "./views/searchView";
import {
  elements,
  lodingSpinner,
  closeLodingSpinner as closeSpinner,
} from "./views/base";
import * as recipeView from "./views/recipeView";

const state = {};

// SEARCH CONTROLLER
const controlSearch = async () => {
  // 1) Get query from view
  const query = "pizza"; // searchView.getInputs();

  if (query) {
    // 2) New search object and add to state
    state.search = new Search(query);

    // 3) Prepare UI for results
    searchView.clearInputs();
    searchView.clearResults();
    lodingSpinner(elements.searchResResultList);

    // 4) Search for recipes
    await state.search.foodFork();

    closeSpinner(elements.searchResResultList);

    // 5) Render results on UI
    searchView.renderInputs(state.search.recipes);
    // console.log(state.search.recipes);
  }
};

elements.searchBtn.addEventListener("submit", (e) => {
  e.preventDefault();
  controlSearch();
});

elements.searchResResultPages.addEventListener("click", (e) => {
  const btn = e.target.closest(".btn-inline");

  if (btn) {
    //dataset is use to access elments in case html is use as data-goto
    //10 is just base System not needed but we can also use this function as diffrent base ex- 2
    const goToPage = parseInt(btn.dataset.goto, 10);
    searchView.clearResults();
    searchView.renderInputs(state.search.recipes, goToPage);
  }
});





//Control Recipie Data
const controlRecipe = async () => {
  //1) Get HAsh from URL
  state.id = window.location.hash.replace("#", "");

  //2) Pass Id into the Recipe Api
  if (state.id) {
    state.recipes = new Recipe(state.id);

    //Highlight The Search text
    if (state.search) searchView.highlightSelected(state.id);

    //3) Clear Display UI for Reults
    recipeView.clearRecipe(elements.searchRecipe);
    lodingSpinner(elements.searchRecipe);

    //4) Get Recipe
    await state.recipes.foodForkRecipe();
    closeSpinner(elements.searchRecipe);

    state.recipes.calResTime();
    state.recipes.renderIngredients();
    state.recipes.calServing();

    //5) Render Recipe to UI
    recipeView.renderRecipe(state.recipes);
  }
};

/**To Merge 2 or more events EX -
 * window.addEventListener("hashchange", controlRecipe); //Get id value from URL as EX - #34353
 * window.addEventListener("load", controlRecipe);  //Save the loaded form of page
 */
["hashchange", "load"].forEach((event) =>
  window.addEventListener(event, controlRecipe)
);
