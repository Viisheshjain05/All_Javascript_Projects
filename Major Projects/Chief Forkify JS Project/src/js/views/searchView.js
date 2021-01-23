/**
 * Here we work all the material related to UI or views
 * as getting value inputes etc are part of views
 */
import { elements } from "./base";

// As it is part of getting input form the UI it is part of SearchView file and other functionality is part of modules files
export const getInputs = () => elements.searchInput.value;

// Clear the searchResults to display others
export const clearInputs = () => (elements.searchInput.value = " ");

//Clear the resultsRecipies to display others
export const clearResults = () => {
  elements.searchResResultList.innerHTML = " ";
  elements.searchResResultPages.innerHTML = " ";
};

//Highlight and remove the search selections
export const highlightSelected = (id) => {
  const resultArr = Array.from(document.querySelectorAll(".results__link"));

  resultArr.forEach((el) => {
    el.classList.remove("results__link--active");
  });

  document
    .querySelector(`a[href='#${id}']`)
    .classList.add("results__link--active");
};

//Get and prepare data for display
const renderResults = (e) => {
  const rec = `
                <li>
                    <a class="results__link"  href="#${e.recipe_id}">
                        <figure class="results__fig">
                            <img src="${e.image_url}" alt="${e.title}">
                        </figure>
                        <div class="results__data">
                            <h4 class="results__name">${titleLength(
                              e.title
                            )}</h4>
                            <p class="results__author">${e.publisher}</p>
                        </div>
                    </a>
                </li>
            `;
  elements.searchResResultList.insertAdjacentHTML("beforeend", rec);
};

//Use to display the results per page  PAGINATION
export const renderInputs = (recipe, pageNo = 1, serPerPage = 10) => {
  // Slice is 0 based function, allow to get array of required length
  //1) Get start and end points for array
  const firstPage = (pageNo - 1) * serPerPage;
  const lastPage = pageNo * serPerPage;

  //Get array according to the Search per page
  //2) cut array as serch per results
  const e = recipe.slice(firstPage, lastPage);

  //Loop through each results in array to display output
  //3) Render the results for each item
  e.forEach(renderResults);

  //Apply the Next & Prev button feature to the project
  //4) apply button toggle feature
  renderButton(pageNo, serPerPage, recipe.length);
};

//RENDER BUTTONS
const renderButton = (page, serPerPage, totalSearch) => {
  // To get the total number of pages
  const pages = Math.ceil(totalSearch / serPerPage);

  //Conecting to find page buttons
  let button;
  if (page === 1 && page < pages) {
    //Display next btn
    button = createButton(page, "next");
  } else if (page < pages) {
    //Display Both btn
    `
${(button = createButton(page, "next"))}
${(button = createButton(page, "prev"))}
`;
  } else if (page === pages) {
    //display Prev btn
    button = createButton(page, "prev");
  }
};

//CREATE BUTTONS
const createButton = (page, type) => {
  const btn = `
      <button class="btn-inline results__btn--${type}" data-goto = "${
    type === "prev" ? page - 1 : page + 1
  }">
  <span>Page ${type === "prev" ? page - 1 : page + 1}</span>
        <svg class="search__icon">
            <use href="img/icons.svg#icon-triangle-${
              type === "prev" ? "left" : "right"
            } "></use>
        </svg>
      </button>`;

  elements.searchResResultPages.insertAdjacentHTML("beforeend", btn);
};

//Shorten the length of title as to avoid multiple lines
const titleLength = (title, limit = 17) => {
  const newTitle = [];

  if (title.length > limit) {
    //Split will create an seperate array from words and reduce will make the new array
    title.split(" ").reduce((acc, cur) => {
      if (acc + cur.length <= limit) {
        //Add the result to new array
        newTitle.push(cur);
      }

      return acc + cur.length;
    }, 0);

    //Return the results
    return `${newTitle.join(" ")} ...`;
  }
  return title;
};

// /**  MY TRIED CODE FOR PAGINATION

//  * CREATE BUTTON AGAIN IN BETTER WAY
//  * REMOVE REPETITIONS
//  */

// //Use to PAGINATION AND change the recipies by button
// const changeBtn = (recipes, pageNo, prev = 0, next = 2) => {
//   if (pageNo != 1) {
//     prev = pageNo - 1;
//     next = pageNo + 1;
//   }

//   //Html Btn Context
//   const btn = `
//               <button class="btn-inline results__btn--prev">
//                   <svg class="search__icon">
//                       <use href="img/icons.svg#icon-triangle-left "></use>
//                   </svg>
//                   <span>Page ${prev}</span>
//               </button>
//               <button class="btn-inline results__btn--next">
//                 <span>Page ${next}</span>
//                   <svg class="search__icon">
//                       <use href="img/icons.svg#icon-triangle-right"></use>
//                   </svg>
//               </button>`;
//elements.searchResResultPages.insertAdjacentHTML("beforeend", btn);

//   //Add new Results For prev button and Button Icons
//   document.querySelector(".results__btn--prev").addEventListener("click", () => {
//     if (pageNo != 1) {
//       //1) Clear old Results
//       clearResults();

//       //2) Add new results
//       renderInputs(recipes, pageNo - 1);
//     }
//   });

//   //Add new Results For prev button and Button Icons
//   document.querySelector(".results__btn--next").addEventListener("click", () => {
//     if (pageNo * 10 < recipes.length) {
//       clearResults();
//       renderInputs(recipes, pageNo + 1);
//     }
//   });

//   //Remove Prev Button at its Last Position
//   if (prev == 0) {.removeChild(e);
//   }

//   //Remove Next Button at its Last Position
//   if (pageNo * 10 > recipes.lengt.removeChild(e);
//   }
// };
