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
let firstLoad = false;
let totalHits = 'null';
const onPage = 40; 
loadMoreBtnEl.style.display="none";

formEl.addEventListener('submit', searching)

const markupRender = ({ data }) => {
  const photos = data.hits;
  const markup = templateFunction(photos);
  gallery.insertAdjacentHTML('beforeend', markup);
  lightbox.refresh();
  totalHits = data.totalHits;
  if (firstLoad && page === 1) {
    if (!data || data.hits.length === 0) {
      Notiflix.Notify.failure("Sorry, there are no images matching your search query. Please try again.");
      loadMoreBtnEl.style.display = "none";
      return;
    }
    Notiflix.Notify.success(`Hooray! We found ${totalHits} images.`);
  }
};

function searching(event) {
    event.preventDefault();
    clearGallery();
    firstLoad = true;
    page = 1
    const inputQuery = inputEl.value;
    fetchHandlePhoto(inputQuery, page);
}

async function fetchHandlePhoto(inputQuery, page) {
  try {
    const { data } = await fetchPhoto(inputQuery, page);
    console.log(data);
    loadMoreBtnEl.style.display = "block";
    markupRender({ data });
    page++;
  } catch (error) {
    console.warn(error);
  }
  if(page * onPage >= totalHits) {
    Notiflix.Notify.failure("We're sorry, but you've reached the end of search results.");
    loadMoreBtnEl.style.display = "none";
  }
}

const loadMore = () => {
  if(firstLoad) {
    page ++;
    const inputQuery = inputEl.value
      fetchHandlePhoto(inputQuery, page)
    }
      const { height: cardHeight } = document
      .querySelector(".gallery")
      .firstElementChild.getBoundingClientRect();
    
    window.scrollBy({
      top: cardHeight * 2,
      behavior: "smooth",
    });
  }

  loadMoreBtnEl.addEventListener('click', loadMore)

const clearGallery = () => {
  gallery.innerHTML = ''; 
  loadMoreBtnEl.style.display="none";
};
    
const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: "alt",
  captionDelay: 250,
  aptionPosition: "bottom",
});
    
