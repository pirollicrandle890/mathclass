const getRandomNumber = () => {
  const max = 10;
  const min = 1;
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
