import { database } from "./aquariumData.js";

export const tipList = () => {
    let tipCard = "<h2 class=\"tip_title\">Tips</h2>"
    for (const tip of database.tips) {
        tipCard += `
        <ul class="tips">
            <h3>${tip.topic}</h3>
                <p>${tip.text}</p>
        <li class="tip">
        </li>
        </ul>`
    }
    return tipCard
};

console.log(tipList())