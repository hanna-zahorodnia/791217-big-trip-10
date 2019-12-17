import {getMonthString} from "../utils.js";
import AbstractComponent from './abstract-component.js';

const createCitiesTemplate = (cards) => {
  return cards.map(({destination}) => destination).join(` — `);
};

const getTripDates = (data) => {
  const lastIndex = data.length - 1;
  const dayDate = data[lastIndex].dayDate;

  return `${getMonthString(data[0].dayDate)} ${data[0].dayDate.getDate()}&nbsp;—&nbsp;${dayDate.getDate() + lastIndex}`;
};

export const createTripInfoComponent = (cards, data) => {
  const citiesTemplate = createCitiesTemplate(cards);
  return (
    `<div class="trip-info__main">
    <h1 class="trip-info__title">${citiesTemplate}</h1>

    <p class="trip-info__dates">${getTripDates(data)}</p>
  </div>`
  );
};

export default class TripInfo extends AbstractComponent {
  constructor(cards, data) {
    super();
    this._cards = cards;
    this._data = data;
  }

  getTemplate() {
    return createTripInfoComponent(this._cards, this._data);
  }
}
