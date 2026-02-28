import './style.css';
import { Header } from './components/Header.js';
import { Footer } from './components/Footer.js';
import { initRouter } from './router.js';

document.querySelector('#app').innerHTML = `
  ${Header()}
  <main id="main-content"></main>
  ${Footer()}
`;

initRouter();
