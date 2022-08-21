const languageData = [
  { word: 'Good Morning - English', language: 'English' },
  { word: 'Bom Dia - Portuguese', language: 'Portuguese' },
  { word: 'Guten Morgen - German', language: 'German' },
];

const goodMorning = (elem) => {
  const random = Math.floor(Math.random() * languageData.length);

  elem.innerHTML = languageData[random].word;
};

export default goodMorning;
