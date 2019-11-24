import {createMenuComponent} from './components/trip-tabs.js';
import {createFilterComponent} from './components/trip-filters.js';
import {createTripInfoComponent} from './components/trip-info.js';
import {createSortComponent} from './components/sorting.js';
import {createFormComponent} from './components/form.js';
import {createTripListComponent} from './components/trip-list.js';
import {createCardComponent} from './components/event.js';


const TRIPS_AMOUNT = 3;

const render = (container, component, place = `beforeend`) => {
  container.insertAdjacentHTML(place, component);
};

const controls = document.querySelector(`.trip-controls`);
render(controls, createMenuComponent());
render(controls, createFilterComponent());

const tripInfo = document.querySelector(`.trip-info`);
render(tripInfo, createTripInfoComponent(), `afterbegin`);


const tripcontainer = document.querySelector(`.trip-events`);
render(tripcontainer, createSortComponent());
render(tripcontainer, createFormComponent());
render(tripcontainer, createTripListComponent());

const tripsList = tripcontainer.querySelector(`.trip-days`);

new Array(TRIPS_AMOUNT)
  .fill(``)
  .forEach(
      () => render(tripsList, createCardComponent())
  );
