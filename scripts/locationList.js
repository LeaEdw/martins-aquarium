import { database } from "./aquariumData.js";

export const locationList = () => {
  let locationCard = "<h2 class=\"location_title\">Locations</h2>";
  for (const place of database.locations) {
    locationCard += `
        <article class="locations">
            <section class="location" >
                <div><strong>${place.name}</strong>
                </div>
                <div><p>${place.country}</p>
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