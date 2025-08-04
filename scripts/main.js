import { fishList } from "./fishList.js";
import { tipList } from "./tipList.js";
import { locationList } from "./locationList.js";
import { mostHolyFish } from "./multiples.js";
import { soldierFish } from "./multiples.js";
import { regularFish } from "./multiples.js";
import { database } from "./aquariumData.js";

//Invoke and store the multiples.js functions:

const holiest = mostHolyFish();
const soldierFishTellEm = soldierFish();
const joeSchmoes = regularFish();

// // Generate the fish list
// const fishHTML = fishList();

// Generate the care tips
const tipHTML = tipList();

// // Generate the location list
const locationHTML = locationList();

// Render each HTML string to the correct DOM element

const showMeYourFish = document.getElementById('fishList')
showMeYourFish.innerHTML = `${holiest}${soldierFishTellEm}${joeSchmoes}`

const generousTip = document.getElementById('tipList')
generousTip.innerHTML = tipHTML

const whereAreYou = document.getElementById('locationList')
whereAreYou.innerHTML = locationHTML

