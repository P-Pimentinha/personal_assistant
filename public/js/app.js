//google Web Voice API
const SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.interimResults = false;
recognition.lang = 'en-US';

// functions
import {
  goodMorning,
  breakfast,
  quotes,
  weatherInfo,
  wordsInfo,
} from './components/index.js';

//elements
const gutenMorgen = document.getElementById('goodMorning');
const breakFast = document.getElementById('breakfast');
const quote = document.getElementById('quote');
const weather = document.getElementById('weather');
const wordOfTheDay = document.getElementById('wordOfTheDay');
const wordOfTheDayEnglish = document.querySelector('.wordOfTheDayEnglish');
const question = document.querySelector('.question');

console.log(question);

//buttons
const buttonTwo = document.querySelector('.start-btn-two');
const buttonThree = document.querySelector('.start-btn-three');
const buttonFour = document.querySelector('.start-btn-four');

recognition.addEventListener('result', (e) => {
  const text = Array.from(e.results[0][0].transcript).join('');
  console.log(e.results);

  if (text.includes('morning')) {
    goodMorning(gutenMorgen);
    breakfast(breakFast);
    quotes(quote);
    weatherInfo(weather);
    wordsInfo(wordOfTheDay, wordOfTheDayEnglish);
    question.classList.add('visi');
  } else {
    document.getElementById('whatToStudy').innerHTML = 'try again';
  }
});

buttonTwo.addEventListener('click', () => {
  recognition.start();
});

buttonThree.addEventListener('click', () => {
  location.reload();
});

buttonFour.addEventListener('click', () => {
  goodMorning(gutenMorgen);
  breakfast(breakFast);
  quotes(quote);
  weatherInfo(weather);
  wordsInfo(wordOfTheDay, wordOfTheDayEnglish);
  question.classList.add('visi');
});

/* const subjectData = [
  { subject: 'Read Book' },
  { subject: 'Write One Page' },
  { subject: 'Listen PodCast' },
  { subject: 'Watch Serie' },
  { subject: 'Generate random word and write 5 sentences' },
];

let randomSubject = '';

const startDay = () => {
  const random = Math.floor(Math.random() * subjectData.length);

  randomSubject = subjectData[random].subject;

  document.getElementById('whatToStudy').innerHTML = randomSubject;
}; */
