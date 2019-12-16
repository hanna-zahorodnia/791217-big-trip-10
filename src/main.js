import MenuComponent from './components/menu.js';
import FiltersComponent from './components/filter.js';
import TripInfoComponent from './components/trip-info.js';
import SortingComponent from './components/sorting.js';
import TripListComponent from './components/trip-list.js';
import TripController from './controllers/trip-controller.js';

import {menu} from "./mock/menu.js";
import {filterNames} from "./mock/filter.js";
import {cards, generateDays} from "./mock/trip-point.js";
import {render, RenderPosition} from './utils/render.js';

const days = generateDays();

const controls = document.querySelector(`.trip-controls`);
render(controls, new MenuComponent(menu).getElement(), RenderPosition.BEFOREEND);
render(controls, new FiltersComponent(filterNames).getElement(), RenderPosition.BEFOREEND);

const tripInfo = document.querySelector(`.trip-info`);
render(tripInfo, new TripInfoComponent(cards, days).getElement(), RenderPosition.AFTERBEGIN);

const tripContainer = document.querySelector(`.trip-events`);


render(tripContainer, new SortingComponent().getElement(), RenderPosition.BEFOREEND);

render(tripContainer, new TripListComponent().getElement(), RenderPosition.BEFOREEND);

const tripController = new TripController(tripContainer);
tripController.render(days);

const getFullPrice = cards.reduce((accumulator, item) => accumulator + item.price, 0);
document.querySelector(`.trip-info__cost-value`).textContent = getFullPrice;
