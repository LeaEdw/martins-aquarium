import { database } from "./aquariumData.js";

export const locationList = () => {
  let locationCard = "";
  for (const place of database.locations) {
    locationCard += `
        <article class="locations">
            <section class="location" >
                <div> ${place.name}
                </div>
                <div> ${place.country}
                </div>
                    <p> ${place.description}
                    </p>
                <div>
                </div>
            </section>
        </article>`;
  }
  return locationCard
};

console.log(locationList())