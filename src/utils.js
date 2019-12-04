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

export {formatTime, getRandomIntegerNumber, getRandomArrayItem};
