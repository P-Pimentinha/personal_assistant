//global variables
let weatherApiFetchData = [];
const url = '/api/v1/weather';

const getWeatherInfo = async () => {
  try {
    const { data } = await axios.get(url);
    weatherApiFetchData.push(data.data);
    return;
  } catch (error) {
    console.log(error);
  }
};

getWeatherInfo();

const weatherInfo = (elem) => {
  elem.innerHTML = weatherApiFetchData[0].main.temp;
};

export default weatherInfo;
