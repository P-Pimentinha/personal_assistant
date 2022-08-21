const quoteData = [
  {
    sentence: '“Be yourself; everyone else is already taken.”',
  },
  {
    sentence: '“So many books, so little time.”',
  },
  {
    sentence: '“A room without books is like a body without a soul.”',
  },
];

const quotes = (elem) => {
  const random = Math.floor(Math.random() * quoteData.length);

  elem.innerHTML = quoteData[random].sentence;
};

export default quotes;
