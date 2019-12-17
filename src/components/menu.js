import AbstractComponent from './abstract-component.js';


const createMenuComponent = (menu) => {
  return (
    `<nav class="trip-controls__trip-tabs  trip-tabs">
      ${menu.map(({isActive, name}) => {
      return `<a class="trip-tabs__btn ${isActive ? `trip-tabs__btn--active` : ``}" href="#">${name}</a>`;
    })
    }
    </nav>`);
};

export default class Menu extends AbstractComponent {
  constructor(menu) {
    super();
    this._menu = menu;
  }

  getTemplate() {
    return createMenuComponent(this._menu);
  }
}
