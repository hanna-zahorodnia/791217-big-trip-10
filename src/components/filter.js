import AbstractComponent from './abstract-component.js';

const createFilterComponent = (filters) => {
  return (
    `<form class="trip-filters" action="#" method="get">
    ${filters.map(({isChecked, name}) => {
      return `
    <div class="trip-filters__filter">
      <input id="filter-${name}" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="${name}" ${isChecked ? `checked` : ``}>
      <label class="trip-filters__filter-label" for="filter-${name}">${name.charAt(0).toUpperCase() + name.slice(1)}</label>
    </div>`;
    }
    )}
    <button class="visually-hidden" type="submit">Accept filter</button>
  </form>`
  );
};

export default class Filters extends AbstractComponent {
  constructor(filters) {
    super();
    this._filters = filters;
  }

  getTemplate() {
    return createFilterComponent(this._filters);
  }
}
