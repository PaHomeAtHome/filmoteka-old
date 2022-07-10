import NewsApiService from './movie-service';
import { showMovies } from './popular';

const refs = {
    searchForm: document.querySelector('.js-search-form'),
    galleryMovie: document.querySelector('#search-movie'),
};
const newsApiService = new NewsApiService();

refs.searchForm.addEventListener('submit', onSearch);

function onSearch(e) {
    e.preventDefault();

    newsApiService.query = e.currentTarget.elements.searchQuery.value;
    

    if (newsApiService.query === '') {
        return;
    }
    

    // loadMoreBtn.show();
    newsApiService.resetPage();
    
    clearGalleryContainer();
    fetchThemovie();

}

function appendArticlesMarkup(data) {
    showMovies(data);
}


async function fetchThemovie() {
    try {
        // loadMoreBtn.disable();
        const res = await newsApiService.fetchThemovie();
        console.log(res);
      
        if (res) {
            appendArticlesMarkup(res);
        }
        // loadMoreBtn.enable();
    } catch (error) {
        console.log(error);
    }
}

function clearGalleryContainer() {
    refs.galleryMovie.innerHTML = '';
}


