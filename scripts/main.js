import { fishList } from "./fishList.js";
import { tipList } from "./tipList.js";
import { locationList } from "./locationList.js";

// Generate the fish list
const fishHTML = fishList();

// Generate the care tips
const tipHTML = tipList();

// // Generate the location list
const locationHTML = locationList();

// Render each HTML string to the correct DOM element

const showMeYourFish = document.getElementById('fishList')
showMeYourFish.innerHTML = fishHTML

const justTheTip = document.getElementById('tipList')
justTheTip.innerHTML = tipHTML

const whereAreYou = document.getElementById('locationList')
whereAreYou.innerHTML = locationHTML
