import {getCity, formatTime} from "../utils.js";
import AbstractComponent from './abstract-component.js';

const eventOptions = [
  {type: `Transfer`, options: [
    {text: `Taxi`, name: `taxi`, isChecked: false},
    {text: `Bus`, name: `bus`, isChecked: false},
    {text: `Train`, name: `train`, isChecked: false},
    {text: `Ship`, name: `ship`, isChecked: false},
    {text: `Transport`, name: `transport`, isChecked: false},
    {text: `Drive`, name: `drive`, isChecked: false},
    {text: `Flight`, name: `flight`, isChecked: true}
  ]},
  {type: `Activity`, options: [
    {text: `Check-in`, name: `check-in`, isChecked: false},
    {text: `Sightseeing`, name: `sightseeing`, isChecked: false},
    {text: `Restaurant`, name: `restaurant`, isChecked: false}
  ]}
];

const createFormComponent = (eventData) => {
  const {offers, type, destination, startTime, endTime, price, favorite, description, img} = eventData;
  return (
    `<li class="trip-events__item">
        <form class="event  event--edit" action="#" method="post">
          <header class="event__header">
            <div class="event__type-wrapper">
              <label class="event__type  event__type-btn" for="event-type-toggle-1">
              <span class="visually-hidden">Choose event type</span>
              <img class="event__type-icon" width="17" height="17" src="img/icons/${type.toLowerCase()}.png" alt="Event type icon">
              </label>
              <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">
              <div class="event__type-list">

              ${eventOptions.map((element) => {
      return `<fieldset class="event__type-group">
        <legend class="visually-hidden">${element.type}</legend>
        <div class="event__type-item">
        ${element.options.map(({isChecked, name}) => {
      return `<input id="event-type-${name}-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${name}" ${isChecked ? `checked` : ``}>;
        <label class="event__type-label  event__type-label--${name}" for="event-type-${name}-1">${name}</label>`;
    })
    }
    </div>
  </fieldset>`;
    })}
              </div>
            </div>
            <div class="event__field-group  event__field-group--destination">
              <label class="event__label  event__type-output" for="event-destination-1">
              ${type} at
              </label>
              <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value=${destination} list="destination-list-1">
              <datalist id="destination-list-1">
              ${getCity()}
              </datalist>
            </div>
            <div class="event__field-group  event__field-group--time">
              <label class="visually-hidden" for="event-start-time-1">
              From
              </label>
              <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="18/03/19 ${formatTime(startTime)}">
              —
              <label class="visually-hidden" for="event-end-time-1">
              To
              </label>
              <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="18/03/19 ${formatTime(endTime)}">
            </div>
            <div class="event__field-group  event__field-group--price">
              <label class="event__label" for="event-price-1">
              <span class="visually-hidden">Price</span>
              €
              </label>
              <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="${price}">
            </div>
            <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
            <button class="event__reset-btn" type="reset">Delete</button>
            <input id="event-favorite-1" class="event__favorite-checkbox  visually-hidden" type="checkbox" name="event-favorite" ${favorite ? `checked` : ``}>
            <label class="event__favorite-btn" for="event-favorite-1">
              <span class="visually-hidden">Add to favorite</span>
              <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">
                <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"></path>
              </svg>
            </label>
            <button class="event__rollup-btn" type="button">
            <span class="visually-hidden">Open event</span>
            </button>
          </header>
          <section class="event__details">
            <section class="event__section  event__section--offers">
              <h3 class="event__section-title  event__section-title--offers">Offers</h3>
              <div class="event__available-offers">
                ${offers.map((element) => {
      return `<div class="event__offer-selector">
      <input class="event__offer-checkbox  visually-hidden" id="event-offer-${element.name}-1" type="checkbox" name="event-offer-${element.name}" ${element.checked ? `checked` : ``}>
      <label class="event__offer-label" for="event-offer-${element.name}-1">
        <span class="event__offer-title">${element.type}</span>
        +
        €&nbsp;<span class="event__offer-price">${element.price}</span>
      </label>
    </div>`;
    })}


              </div>
            </section>
            <section class="event__section  event__section--destination">
              <h3 class="event__section-title  event__section-title--destination">Destination</h3>
              <p class="event__destination-description">${description}</p>
              <div class="event__photos-container">
                <div class="event__photos-tape">
                <img class="event__photo" src="${img}" alt="Event photo">
                </div>
              </div>
            </section>
          </section>
        </form>
    </li>`
  );
};

export default class Form extends AbstractComponent {
  constructor(card) {
    super();
    this._card = card;
  }

  getTemplate() {
    return createFormComponent(this._card);
  }

  setSubmitHandler(handler) {
    this.getElement().querySelector(`form`)
      .addEventListener(`submit`, handler);
  }

  setEditBtnClickHandler(handler) {
    this.getElement().querySelector(`.event__rollup-btn`)
      .addEventListener(`click`, handler);
  }
}
