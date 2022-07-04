const API_KEY = `1b50ba0e0b99203af5e26bdcee6d2298`;
const BASE_URL = 'https://api.themoviedb.org/3/search/movie'

const refs = {
    searchForm: document.querySelector('#search-form'),
    galleryContainer: document.querySelector('.gallery'),
};


class NewsApiService {
    constructor() {
        this.searchQuery = '';
        this.page = 1;
        this.limit = 40;
    }

    async fetchThemovie() {
        console.log('До запроса ', this);

        const url = `${BASE_URL}?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${this.searchQuery}`;

        try {
            
        } catch (error) {
            console.log(error);
        }
    }
}

