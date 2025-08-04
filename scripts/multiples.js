import { database } from "./aquariumData.js";

export const mostHolyFish = () => {
  let holyFish = "";

  for (const fish of database.fish) {
    if (fish.length % 3 === 0) {
      holyFish += `
    <article class="holyFish">
      <img src="${fish.image}" alt="image of ${fish.species}" class="fish_image">
        <div class="fish_text">
          <h3 class="fish_name">${fish.name} (${fish.length})</h2>
          <p class="fish_species">- ${fish.species} -</p>
        </div>
    </article>`;
    } 
  }

  return holyFish;
};

export const soldierFish = () => {
  let soldierFish = "";
  
  for (const fish of database.fish) {
    if (fish.length % 5 === 0) {
        soldierFish += `<article class="soldierFish">
      <img src="${fish.image}" alt="image of ${fish.species}" class="fish_image">
        <div class="fish_text">
          <h3 class="fish_name">${fish.name} (${fish.length})</h2>
          <p class="fish_species">- ${fish.species} -</p>
        </div>
    </article>`
    }
  }

  return soldierFish
};

export const regularFish = () => {
  let regularFish = "";

  for (const fish of database.fish) {
    if (fish.length % 3 != 0 && fish.length % 5 != 0) {
        regularFish += `<article class="regularFish">
      <img src="${fish.image}" alt="image of ${fish.species}" class="fish_image">
        <div class="fish_text">
          <h3 class="fish_name">${fish.name} (${fish.length})</h2>
          <p class="fish_species">- ${fish.species} -</p>
        </div>
    </article>`;
    }
  }

  return regularFish;
};

