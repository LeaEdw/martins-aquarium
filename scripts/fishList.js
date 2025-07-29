import { database } from "./aquariumData.js";

export const fishList = () => {
  let fishCard = '<h2>Fish</h2>\n'

  for (const fish of database.fish) {
    fishCard += `
    <article class="fish">
      <img src="${fish.image}" alt="image of ${fish.species}" class="fish_image">
        <div class="fish_text">
          <h3 class="fish_name">${fish.name}</h2>
          <p class="fish_species">- ${fish.species} -</p>
        </div>
    </article>`
  }

  return fishCard
};

console.log(fishList())