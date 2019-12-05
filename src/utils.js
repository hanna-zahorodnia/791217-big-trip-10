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

export {formatTime, getRandomIntegerNumber, getRandomArrayItem, generateDescription, generateOptions, getRandomDate};
