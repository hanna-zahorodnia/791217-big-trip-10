import AbstractComponent from './abstract-component.js';

const createTripListComponent = () => {
  return (
    `<ul class="trip-days"></ul>`
  );
};

export default class TripList extends AbstractComponent {
  getTemplate() {
    return createTripListComponent();
  }
}
