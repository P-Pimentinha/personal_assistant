const breakfastData = [
  { food: 'Toast' },
  { food: 'Eggs' },
  { food: 'Fasting' },
];

const breakfast = (elem) => {
  const random = Math.floor(Math.random() * breakfastData.length);

  elem.innerHTML = breakfastData[random].food;
};

export default breakfast;
