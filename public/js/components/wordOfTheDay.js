let wordApiFetchData = [];
const url = '/api/v1/words';

const getWords = async () => {
  try {
    const { data } = await axios.get(url);
    wordApiFetchData.push(data);
    console.log(data[0].word);
    return;
  } catch (error) {
    console.log(error);
  }
};

getWords();

const wordsInfo = (elem, elemTwo) => {
  const random = Math.floor(Math.random() * wordApiFetchData[0].length);
  elem.innerHTML = wordApiFetchData[0][random].wort;
  elemTwo.innerHTML = ` / ${wordApiFetchData[0][random].word}`;
};

export default wordsInfo;
