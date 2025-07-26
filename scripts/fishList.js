import { database } from "./aquariumData.js";

export const fishList = () => {
  let fishCard = ''

  for (const fish of database.fish) {
    fishCard += `"${fish.name}" the ${fish.species}
    <img src="${fish.image}" alt="${fish.species} image" class="movie__poster">\n`
  }

  return fishCard
};

console.log(fishList())