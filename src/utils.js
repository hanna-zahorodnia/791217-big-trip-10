import {MONTH} from "./const.js";

const cities = [
  `Chamonix`,
  `Geneva`,
  `Amsterdam`,
  `Saint Petersburg`
];

const formatTime = (UTCTimestamp) => {
  const date = new Date(UTCTimestamp);
  return `${date.getHours()}:${date.getMinutes()}`;
};

const getRandomIntegerNumber = (min, max) => {
  return min + Math.floor(max * Math.random());
};

const getRandomArrayItem = (array) => {
  const randomIndex = getRandomIntegerNumber(0, array.length);

  return array[randomIndex];
};

const generateDescription = (description) => {
  return description
    .filter(() => Math.random() > 0.5)
    .slice(0, getRandomIntegerNumber(1, 3));
};

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

const getFullDate = (date) => (`${date.getFullYear()}-${formatTime(date.getMonth())}-${formatTime(date.getDate())}`);

const getMonthString = (date) => (MONTH[date.getMonth()]);

const getCity = () => (
  cities.map((city) => (
    `<option value="${city}"></option>`
  ))
  .join(`\n`)
);

export {formatTime, getRandomIntegerNumber, getRandomArrayItem, generateDescription, generateOptions, getRandomDate, getFullDate, getMonthString, getCity};
