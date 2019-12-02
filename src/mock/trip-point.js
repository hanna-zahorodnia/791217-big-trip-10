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

const getRandomIntegerNumber = (min, max) => {
  return min + Math.floor(max * Math.random());
};

const getRandomArrayItem = (array) => {
  const randomIndex = getRandomIntegerNumber(0, array.length);

  return array[randomIndex];
};

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
  const targetDate = new Date();
  const diffValue = getRandomIntegerNumber(0, 15);

  targetDate.setHours(targetDate.getHours() + diffValue);

  return targetDate;
};

const createTripPoint = () => {
  const startTime = getRandomDate();
  const duration = getRandomIntegerNumber(30, 120) * 60 * 1000;
  const endTime = new Date(startTime.valueOf() + duration);

  return {
    type: getRandomArrayItem(types),
    destination: getRandomArrayItem(cities),
    img: `http://picsum.photos/300/150?r=${Math.random()}`,
    description: generateDescription(sentences),
    // от 1 до 1000
    price: Math.floor(Math.random() * 1000) + 1,
    offers: generateOptions(extraOptions),
    startTime,
    endTime,
  };
};

const createTripRoute = (count) => {
  return new Array(count)
    .fill(``)
    .map(createTripPoint);
};

const cards = createTripRoute(3);

export {cards};
