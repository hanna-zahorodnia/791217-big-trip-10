import {getFullDate, getMonthString, createElement} from "../utils.js";

const createTripDaysComponent = (dayData) => (
  `<li class="trip-days__item  day">
  <div class="day__info">
    <span class="day__counter">${dayData.day}</span>
    <time class="day__date" datetime="${getFullDate(dayData.dayDate)}">${getMonthString(dayData.dayDate)} ${dayData.dayDate.getDate()}</time>
  </div>
    <ul class="trip-events__list">
    </ul>
  </li>`
);

export default class TripDays {
  constructor(days) {
    this._days = days;
    this._element = null;
  }

  getTemplate() {
    return createTripDaysComponent(this._days);
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}

