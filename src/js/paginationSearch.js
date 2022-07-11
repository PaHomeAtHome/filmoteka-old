import { showMovies } from './popular';
import { getMovies } from './popular';
import { popularOnPageLoad } from './popular';
import { popular } from './pagination';


popular();

export function searchMov() {
    const API_KEY_SEARCH = `1b50ba0e0b99203af5e26bdcee6d2298`;
const BASE_URL_SEARCH = 'https://api.themoviedb.org/3/search/movie';

const searchForm = document.querySelector('.js-search-form');
searchForm.addEventListener('submit', onSearch);

const link = document.querySelector('.number');
const wrapper = document.querySelector('.popular__mov');
const previuos = document.querySelector('.previous');
const next = document.querySelector('.next');
const navigation = document.querySelector('.navigation');

let page = 1;

function onSearch(e) {
    
    document.addEventListener('click', handleLinkSearch);
    previuos.addEventListener('click', handlePrevBtnSearch);
    next.addEventListener('click', handleNextBtnSearch);

    e.preventDefault();

    const searchQuery = e.currentTarget.elements.searchQuery.value;
    
    console.log(searchQuery);
    wrapper.innerHTML = ''; 

    if (searchQuery === '') {
        return;
    }

    function handleLinkSearch(e) {
       
        if(e.target.className === "number") {
            console.log(e.target.className);
            page = e.target.innerText;
            console.log(page);
            wrapper.innerHTML = "";
            document.removeEventListener("DOMContentLoaded", popularOnPageLoad);
            getMovies(`${BASE_URL_SEARCH}?api_key=${API_KEY_SEARCH}&language=en-US&page=${page}&include_adult=false&query=${searchQuery}`);
        }
    }

    function handlePrevBtnSearch(e) {
        if(Number(page) === 1) {
            return
        } else {
            console.log(page);
            page = Number(page) - 1;
            wrapper.innerHTML = "";
            document.removeEventListener("DOMContentLoaded", popularOnPageLoad);
            getMovies(`${BASE_URL_SEARCH}?api_key=${API_KEY_SEARCH}&language=en-US&page=${page}&include_adult=false&query=${searchQuery}`);
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
    
    function handleNextBtnSearch() {
        page = Number(page) + 1;
        console.log(page);
        wrapper.innerHTML = "";
        document.removeEventListener("DOMContentLoaded", popularOnPageLoad);
        getMovies(`${BASE_URL_SEARCH}?api_key=${API_KEY_SEARCH}&language=en-US&page=${page}&include_adult=false&query=${searchQuery}`);

        if(page > 1) {
        
        const addPage = `<button type="button" class="number">${Number(page) - 1}</button>
        <button type="button" class="number">${Number(page)}</button>
        <button type="button" class="number">${Number(page) + 1}</button>
        `
        navigation.innerHTML = ""

        navigation.insertAdjacentHTML('beforeend', addPage)
        }

}


}
}

searchMov();