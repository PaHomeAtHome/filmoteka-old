<<<<<<< Updated upstream
import * as paginationjs from 'paginationjs';

const API_KEY = 'api_key=1cf50e6248dc270629e802686245c2c8';
const BASE_URL = 'https://api.themoviedb.org/3';
const API_URL = BASE_URL + '/trending/movie/day?' + API_KEY + '&genre';

import { getMovies } from './popular';

$('#pagination-container').pagination({
  dataSource: function (done) {
    $.ajax({
      type: 'GET',
      url: API_URL,
      success: function (response) {
        const arr = new Array(response.total_results);
        done(arr);
      },
    });
  },
  afterPageOnClick: function (event) {
    event.preventDefault();
    document.querySelector('.popular__mov').innerHTML = '';
    const page = event.target.innerText;
    const url = API_URL + `&page=${page}`;
    getMovies(url);
  },
  pageSize: 20,
  callback: function (data, pagination) {
    // template method of yourself

    var html = data;
    $('#data-container').html(html);
  },
});
=======
import paginationjs from 'paginationjs';
import './popular';
import { showMovies } from './popular';
import { getMovies } from './popular';

const API_KEY = 'api_key=1cf50e6248dc270629e802686245c2c8';
const BASE_URL = 'https://api.themoviedb.org/3';
const API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&' + API_KEY + '&genre';



getResults(API_URL)

async function getResults(url) {
    try {
        const response = await fetch(url);
        const toJson = await response.json();
       
        makePagination(toJson.total_results);
      }
    
    catch (error) {
      console.log(error);
    }
}

function makePagination(total) {
    
    $('#pagination-container').pagination({
        dataSource: function(done){
    var result = [];
    for (var i = 1; i < total; i++) {
        result.push(i);
    }
    done(result);
 },
        totalNumber: 50,
        pageSize: 20,
        showGoInput: true,
    showGoButton: true,
    callback: function(data, pagination) {
        // template method of yourself
        const template = (dataSource) => dataSource.map(element => `---${element}`)
        var html = template(data);
        $('#data-container').html(html);
        }  
    })   
    
    const paginationEl = document.querySelector('.paginationjs');
    paginationEl.addEventListener('click', changeMovies)

}

function changeMovies(event) {
    if (event.target.nodeName === 'A') {

        const main = document.querySelector('.popular__mov');
        main.innerHTML = ``;

        console.dir(event.target)
        const page = event.target.innerText;
        const url = API_URL + `&page=${page}`
        getMovies(url);
        console.log(`clicked`)
        return;
    }
}


>>>>>>> Stashed changes
