import {formatTime} from "../utils.js";

const createextraOptions = (extraOption) => {
  return extraOption
    .map((item) => (
      `<li class="event__offer">
        <span class="event__offer-title">${item.name}</span>
        +
        &euro;<span class="event__offer-price">${item.price}</span>
      </li>`
    ))
    .join(``);
};

export const createCardContainerComponent = () => {
  return (
    `<li class="trip-days__item  day">
    <div class="day__info">
      <span class="day__counter">1</span>
      <time class="day__date" datetime="2019-03-18">MAR 18</time>
    </div>
      <ul class="trip-events__list">
      </ul>
    </li>`
  );
};

const createCardComponent = (card) => {
  const {type, destination, startTime, endTime, price, offers} = card;

  const extraOptions = createextraOptions(Array.from(offers));
  return (
    `<li class="trip-events__item">
      <div class="event">
        <div class="event__type">
          <img class="event__type-icon" width="42" height="42" src="img/icons/${type.toLowerCase()}.png" alt="Event type icon">
        </div>
        <h3 class="event__title">${type} to ${destination}</h3>

        <div class="event__schedule">
          <p class="event__time">
            <time class="event__start-time" datetime="2019-03-18T10:30">${formatTime(startTime)}</time>
            &mdash;
            <time class="event__end-time" datetime="2019-03-18T11:00">${formatTime(endTime)}</time>
          </p>
          <p class="event__duration">1H 30M</p>
        </div>

        <p class="event__price">
          &euro;&nbsp;<span class="event__price-value">${price}</span>
        </p>

        <h4 class="visually-hidden">Offers:</h4>
        <ul class="event__selected-offers">
        ${extraOptions}
        </ul>

        <button class="event__rollup-btn" type="button">
          <span class="visually-hidden">Open event</span>
        </button>
      </div>
    </li>`
  );
};

export {createCardComponent};
