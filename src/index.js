import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import Notiflix from 'notiflix';
import templateFunction from './template.hbs';
import fetchPhoto from "./api.js";

const gallery = document.querySelector('.gallery');
const loadMoreBtnEl = document.getElementById("js-more-btn");
const formEl = document.getElementById('search-form');
const inputEl = document.querySelector('input[name="searchQuery"]');
let page = 0;

loadMoreBtnEl.style.display="none";

formEl.addEventListener('submit', searching)

const markupRender = ({ data: { hits: photos } }) => {
    const markup = templateFunction(photos);
    gallery.insertAdjacentHTML('beforeend', markup);
    lightbox.refresh();
  };

function searching(event) {
    event.preventDefault();
    clearGallery();
    page = 1
    const inputQuery = inputEl.value;
    fetchHandlePhoto(inputQuery, page);
}
function fetchHandlePhoto(inputQuery, page) {
    fetchPhoto(inputQuery, page)
    .then(({ data }) => {
      const totalHits = data.totalHits;
      Notiflix.Notify.success('Hooray! We found `${totalHits}` images.')
      if (!data || data.hits.length === 0) {
        Notiflix.Notify.failure("We're sorry, but you've reached the end of search results.")
        loadMoreBtnEl.style.display="none";
        return;
    }
        loadMoreBtnEl.style.display="block";
        markupRender({data}); 
        page ++;
      })
      .catch(console.warn);
    }

  const loadMore = () => {
    page ++;
    const inputQuery = inputEl.value
      fetchHandlePhoto(inputQuery, page)
  }
    loadMoreBtnEl.addEventListener('click', loadMore)

  const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: "alt",
    captionDelay: 250,
    aptionPosition: "bottom",
  });
  
  const clearGallery = () => {
    gallery.innerHTML = ''; 
    loadMoreBtnEl.style.display="none";
  };

