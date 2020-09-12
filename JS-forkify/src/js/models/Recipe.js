const axios = require("axios");

export default class recipe {
  constructor(id) {
    this.id = id;
  }
  // recipe Meathod in class Recipe
  async foodForkRecipe() {
    try {
      const res = await axios(
        `https://forkify-api.herokuapp.com/api/get?rId=${this.id}`
      );

      this.image_url = res.data.recipe.image_url;
      this.ingredients = res.data.recipe.ingredients;
      this.publisher = res.data.recipe.publisher;
      this.source_url = res.data.recipe.source_url;
      this.title = res.data.recipe.title;

      // console.log(this.ingredients);
    } catch (e) {
      console.log(e);
    }
  }

  calResTime() {
    const totalIng = this.ingredients.length;

    //Calculate time as 5 Min per 3 ingredients
    this.resTime = Math.ceil(totalIng / 3) * 5;
  }

  renderIngredients() {
    //Change Unregular units into common units

    const longUnits = [
      "ounces",
      "ounce",
      "tablespoons",
      "tablespoon",
      "cups",
      "cup",
      "pound",
    ];
    const shortUnits = ["oz ", "oz", "tb", "tb", "cup", "cup", "pound"];
    // const ingredients = [
    //   "6 ounces pasta, we used whole wheat spaghetti",
    //   "1 tablespoon fresh lime juice",
    //   "1/4 Cup chopped fresh cilantro",
    // ];
    const newIngredients = this.ingredients.map((el) => {
      let ingredient = el.toLowerCase();

      //Standardise units

      longUnits.forEach((unit, i) => {
        ingredient = ingredient.replace(unit, shortUnits[i]);
      });

      //Remove Paranthesis
      ingredient = ingredient.replace(/ *\([^)]*\) */g, " "); //Regular expressions
      //console.log(ingredient); //Testing

      //Get unit count and ingredients
      const arrIng = ingredient.split(" ");
      const unitIndex = arrIng.findIndex((el2) => shortUnits.includes(el2));

      let objIng;
      if (unitIndex > -1) {
        //there is a unit
        objIng = {
          count: Math.ceil(parseInt(arrIng.slice(0, unitIndex))),
          unit: arrIng[unitIndex],
          ingredient: arrIng.slice(2).join(" "),
        };
      } else if (parseInt(arrIng[0], 10)) {
        //there is no unit but a number

        objIng = {
          count: arrIng[0],
          unit: "",
          ingredient: arrIng.slice(1).join(" "),
        };
      } else if (unitIndex === -1) {
        //there is no unit and number in 1st position

        objIng = {
          count: 1,
          unit: "",
          ingredient,
        };
      }
      return objIng;
    });

    this.ingredients = newIngredients;
  }

  calServing() {
    this.serving = 4;
  }





}
