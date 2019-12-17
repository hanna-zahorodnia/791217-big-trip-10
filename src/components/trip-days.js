import {getFullDate, getMonthString} from "../utils.js";
import AbstractComponent from './abstract-component.js';

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


export default class TripDays extends AbstractComponent {
  constructor(days) {
    super();
    this._days = days;
  }

  getTemplate() {
    return createTripDaysComponent(this._days);
  }
}

