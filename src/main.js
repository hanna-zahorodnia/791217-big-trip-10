import MenuComponent from './components/menu.js';
import FiltersComponent from './components/filter.js';
import TripInfoComponent from './components/trip-info.js';
import SortingComponent from './components/sorting.js';
import FormComponent from './components/form.js';
import TripListComponent from './components/trip-list.js';
import TripDaysComponent from './components/trip-days.js';
import CardComponent from './components/card.js';

import {menu} from "./mock/menu.js";
import {filterNames} from "./mock/filter.js";
import {cards, generateDays} from "./mock/trip-point.js";
import {render, RenderPosition, replace} from './utils/render.js';

const TRIPS_AMOUNT = 3;

const days = generateDays();

const controls = document.querySelector(`.trip-controls`);
render(controls, new MenuComponent(menu).getElement(), RenderPosition.BEFOREEND);
render(controls, new FiltersComponent(filterNames).getElement(), RenderPosition.BEFOREEND);

const tripInfo = document.querySelector(`.trip-info`);
render(tripInfo, new TripInfoComponent(cards, days).getElement(), RenderPosition.AFTERBEGIN);

const tripContainer = document.querySelector(`.trip-events`);


render(tripContainer, new SortingComponent().getElement(), RenderPosition.BEFOREEND);

render(tripContainer, new TripListComponent().getElement(), RenderPosition.BEFOREEND);

// const tripsDays = tripContainer.querySelector(`.trip-days`);

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

days.slice(0, TRIPS_AMOUNT)
  .forEach((day) => {
    const daysComponent = new TripDaysComponent(day);
    const tripsList = daysComponent.getElement().querySelector(`.trip-events__list`);

    day.dayInfo.forEach((eventData) => {
      renderEvent(tripsList, eventData);
    });

    render(tripContainer, daysComponent.getElement(), RenderPosition.BEFOREEND);
  });

const getFullPrice = cards.reduce((accumulator, item) => accumulator + item.price, 0);
document.querySelector(`.trip-info__cost-value`).textContent = getFullPrice;
