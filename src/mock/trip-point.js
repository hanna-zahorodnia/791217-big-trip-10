import {getRandomIntegerNumber, getRandomArrayItem} from "../utils.js";

const types = [
  `Taxi`,
  `Bus`,
  `Train`,
  `Ship`,
  `Transport`,
  `Drive`,
  `Flight`,
  `Check-in`,
  `Sightseeing`,
  `Restaurant`,
];

const cities = [
  `Chamonix`,
  `Geneva`,
  `Amsterdam`,
];

const sentences = [
  `Lorem ipsum dolor sit amet, consectetur adipiscing elit`,
  `Cras aliquet varius magna, non porta ligula feugiat eget`,
  `Fusce tristique felis at fermentum pharetra`,
  `Aliquam id orci ut lectus varius viverra`,
  `Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante`,
  `Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum`,
  `Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui`,
  `Sed sed nisi sed augue convallis suscipit in sed felis`,
  `Aliquam erat volutpat`,
  `Nunc fermentum tortor ac porta dapibus`,
  `In rutrum ac purus sit amet tempus`
];

const generateDescription = (description) => {
  return description
    .filter(() => Math.random() > 0.5)
    .slice(0, getRandomIntegerNumber(1, 3));
};

const extraOptions = [
  {type: `Check-in`, name: `Add luggage`, price: `10`},
  {type: `Flight`, name: `Switch to comfort class`, price: `150`},
  {type: `Restaurant`, name: `Add meal`, price: `2`}
];

const generateOptions = (options) => {
  return options
    .filter(() => Math.random() > 0.5)
    .slice(0, getRandomIntegerNumber(0, 2));
};

const getRandomDate = () => {
  return (
    Date.now() +
    1 +
    Math.floor(Math.random() * 7) * 24 * getRandomIntegerNumber(0, 60) * 60 * 1000
  );
};

const createTripPoint = () => {
  const startDate = getRandomDate();
  const endDate = getRandomDate();

  return {
    type: getRandomArrayItem(types),
    destination: getRandomArrayItem(cities),
    img: `http://picsum.photos/300/150?r=${Math.random()}`,
    description: generateDescription(sentences),
    // от 1 до 1000
    price: Math.floor(Math.random() * 1000) + 1,
    offers: generateOptions(extraOptions),
    startTime: Math.min(startDate, endDate),
    endTime: Math.max(startDate, endDate),
  };
};

const createTripRoute = (count) => {
  return new Array(count)
    .fill(``)
    .map(createTripPoint);
};

const card = createTripRoute();
const cards = createTripRoute(3);

export {card, cards};
