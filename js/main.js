
import '../css/style.css'
import javascriptLogo from '../images/javascript.svg'
import viteLogo from '../images/vite.svg'
import { setupCounter } from './counter.js'
import dayjs from 'dayjs'


let now = dayjs().format('MMMM, D, YYYY')


const date1 = dayjs(now);
const date2 = dayjs("2023-09-5");

// Difference in days
let df = date1.diff(date2, "day"); 
console.log(df);


document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <h2> Today’s date: ${now}</h2>
    <h2> The amount of days since the start of class is currently ${df} days</h2>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
  
`

setupCounter(document.querySelector('#counter'))
