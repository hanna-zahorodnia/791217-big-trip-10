const createMenuComponent = (menu) => {
  return (
    `<nav class="trip-controls__trip-tabs  trip-tabs">
      ${menu.map(({isActive, name}) => {
      return `<a class="trip-tabs__btn ${isActive ? `trip-tabs__btn--active` : ``}" href="#">${name}</a>`;
    })
    }
    </nav>`);
};

export {createMenuComponent};
