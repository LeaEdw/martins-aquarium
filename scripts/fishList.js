import { database } from "./aquariumData.js";

export const fishList = () => {
  let fishHTML = "";

  for (const fish of database) {
    fishHTML += `
        <article class="fish">
         <img src="${fish.image}" alt="${fish.species} image" class="fish_image">
         <div class="fish_details">
         <h2 class="fish_name">${fish.name}</h2>
         <h3 class="${fish.species}"></h3>
         <p class="about_fish">The ${fish.species} is an "${fish.diet} fish and is usually found in ${fish.location}
         On average the grow to be about ${fish.length} cm long.</p>
         </div>
         </article>`;
  }
  return fishHTML
};
