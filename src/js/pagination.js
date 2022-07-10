import { showMovies } from './popular';
import { getMovies } from './popular';
import { popularOnPageLoad } from './popular';

const API_KEY = 'api_key=1cf50e6248dc270629e802686245c2c8';
const BASE_URL = 'https://api.themoviedb.org/3';
const API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&'+API_KEY+'&genre';
const IMG_URL = 'https://image.tmdb.org/t/p/w500';

let page = 1;

const link = document.querySelector('.number');
const wrapper = document.querySelector('.popular__mov');
const previuos = document.querySelector('.previous');
const next = document.querySelector('.next');
const navigation = document.querySelector('.navigation');


document.addEventListener('click', handleLink);
previuos.addEventListener('click', handlePrevBtn);
next.addEventListener('click', handleNextBtn);


function handleLink(e) {

  if(e.target.className === "number") {
    console.log(e.target.className);
    page = e.target.innerText;
    console.log(page);
    wrapper.innerHTML = "";
    document.removeEventListener("DOMContentLoaded", popularOnPageLoad);
    getMovies(BASE_URL + '/discover/movie?sort_by=popularity.desc&'+API_KEY+`&genre&page=${page}`);
  }
}

function handlePrevBtn(e) {
  if(Number(page) === 1) {
    return
  } else {
    console.log(page);
    page = Number(page) - 1;
    wrapper.innerHTML = "";
    document.removeEventListener("DOMContentLoaded", popularOnPageLoad);
    getMovies(BASE_URL + '/discover/movie?sort_by=popularity.desc&'+API_KEY+`&genre&page=${page}`);
  }
  if(page > 1) {
     
    const addPage = `<button type="button" class="number">${Number(page) - 1}</button>
    <button type="button" class="number">${Number(page)}</button>
    <button type="button" class="number">${Number(page) + 1}</button>
    `
    navigation.innerHTML = ""

    navigation.insertAdjacentHTML('beforeend', addPage)
  }
}

function handleNextBtn() {
    page = Number(page) + 1;
    console.log(page);
    wrapper.innerHTML = "";
    document.removeEventListener("DOMContentLoaded", popularOnPageLoad);
    getMovies(BASE_URL + '/discover/movie?sort_by=popularity.desc&'+API_KEY+`&genre&page=${page}`);

    if(page > 1) {
     
      const addPage = `<button type="button" class="number">${Number(page) - 1}</button>
      <button type="button" class="number">${Number(page)}</button>
      <button type="button" class="number">${Number(page) + 1}</button>
      `
      navigation.innerHTML = ""

      navigation.insertAdjacentHTML('beforeend', addPage)
    }

}



