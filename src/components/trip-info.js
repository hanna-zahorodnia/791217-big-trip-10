const createCitiesTemplate = (cards) => {
  const cities = cards.map(({destination}) => destination);
  return cities.map((destination, i) => i ? `&mdash; ${destination}` : `${destination}`).join(`\n`);
};

export const createTripInfoComponent = (cards) => {
  const citiesTemplate = createCitiesTemplate(cards);
  return (
    `<div class="trip-info__main">
    <h1 class="trip-info__title">${citiesTemplate}</h1>

    <p class="trip-info__dates">Mar 18&nbsp;&mdash;&nbsp;21</p>
  </div>`
  );
};
