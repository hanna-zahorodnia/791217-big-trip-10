import {render, RenderPosition, replace} from '../utils/render.js';
import CardComponent from '../components/card.js';
import FormComponent from '../components/form.js';
import TripDaysComponent from '../components/trip-days.js';

const TRIPS_AMOUNT = 3;

const renderEvent = (container, eventData) => {
  const cardComponent = new CardComponent(eventData);
  const formComponent = new FormComponent(eventData);

  cardComponent.setClickHandler(() => {
    replace(formComponent, cardComponent);
  });

  formComponent.setSubmitHandler(() => {
    replace(cardComponent, formComponent);
  });

  formComponent.setEditBtnClickHandler(() => {
    replace(cardComponent, formComponent);
  });


  render(container, cardComponent.getElement(), RenderPosition.BEFOREEND);
};

export default class TripController {
  constructor(container) {
    this._container = container;
  }

  render(days) {
    days.slice(0, TRIPS_AMOUNT)
  .forEach((day) => {
    const daysComponent = new TripDaysComponent(day);
    const tripsList = daysComponent.getElement().querySelector(`.trip-events__list`);

    day.dayInfo.forEach((eventData) => {
      renderEvent(tripsList, eventData);
    });

    render(this._container, daysComponent.getElement(), RenderPosition.BEFOREEND);
  });
  }
}
