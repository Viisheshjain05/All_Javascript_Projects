const axios = require("axios");

export default class search {
  constructor(item) {
    this.item = item;
  }

  async foodFork() {
    try {
      const rec = await axios(
        `https://forkify-api.herokuapp.com/api/search?&q=${this.item}`    
      );
      this.recipes = rec.data.recipes;
     
    } catch  {
      alert(`${this.item} is not available to search`);
    }
  }
}
