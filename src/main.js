import {createMenuComponent} from './components/menu.js';
import {createFilterComponent} from './components/filter.js';
import {createTripInfoComponent} from './components/trip-info.js';
import {createSortingComponent} from './components/sorting.js';
import {createFormComponent} from './components/form.js';
import {createTripListComponent} from './components/trip-list.js';
import {createCardContainerComponent} from './components/card.js';
import {createCardComponent} from './components/card.js';

import {menu} from "./mock/menu.js";
import {filterNames} from "./mock/filter.js";
import {cards} from "./mock/trip-point.js";


const TRIPS_AMOUNT = 3;

const render = (container, component, place = `beforeend`) => {
  container.insertAdjacentHTML(place, component);
};

const controls = document.querySelector(`.trip-controls`);
render(controls, createMenuComponent(menu));
render(controls, createFilterComponent(filterNames));

const tripInfo = document.querySelector(`.trip-info`);
render(tripInfo, createTripInfoComponent(cards), `afterbegin`);


const tripcontainer = document.querySelector(`.trip-events`);
render(tripcontainer, createSortingComponent());
render(tripcontainer, createFormComponent());
render(tripcontainer, createTripListComponent());

const tripsDays = tripcontainer.querySelector(`.trip-days`);

new Array(TRIPS_AMOUNT)
  .fill(``)
  .forEach(
      () => render(tripsDays, createCardContainerComponent())
  );

const tripsList = tripcontainer.querySelector(`.trip-events__list`);

cards.forEach((card) => render(tripsList, createCardComponent(card)));
