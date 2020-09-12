/**USE FOR DEFAULT MARKUP OF DOM
 * 
 *
 * ALL QUERY SELECTORS WILL BE STORED IN BASE FILE SO TO MAINTAIN A BALANCE AND ONE PLACE TO ALL THE DOM SELECTORS.
 *
 * BASE.JS IS SPEACIAL FILE USED FOR REUASABLE COMPONENTSAND FOR THIS TASK AS UNDER VIEWS FOLDER IN MVC   
 ARCITECTURE.
 */

// EXPORTING QUERY SELECTORS
export const elements = {
  searchInput: document.querySelector(".search__field"),
  searchBtn: document.querySelector(".search"),
  searchRecipe: document.querySelector(".recipe"),
  searchResResultList: document.querySelector(".results__list"),
  searchResResultPages: document.querySelector(".results__pages"),
  searchResIngList: document.querySelector(".recipe__ingredient-list"),
  serResLink: document.querySelector(".results__link")
};


export const closeLodingSpinner = (parent) => {
  parent.innerHTML = " ";
};

export const lodingSpinner = (parent) => {
  const spinner = `
  <div class="spinner-border loader" role="status">
    <span class="sr-only">Loading...</span>
  </div>`;

  parent.insertAdjacentHTML("afterbegin", spinner);
};
