import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import axios from 'axios';
import Notiflix from 'notiflix';
import templateFunction from './template.hbs';
import fetchPhoto from "./api.js";

const gallery = document.querySelector('.gallery');
const searchBtnEl = document.getElementById('js-search-btn');
const loadMoreBtnEl = document.getElementById("js-more-btn");
const formEl = document.getElementById('search-form');
const inputEl = document.querySelector('input[name="searchQuery"]');
let page = 0;

const BASE_URL = 'http://pixabay.com/api/';
const API_KEY = '37960657-3cfa1dcb3808e6e9b644b5e90'

loadMoreBtnEl.style.display="none";

formEl.addEventListener('submit', searching)



const markupRender = ({ data: { hits: photos } }) => {
    const markup = templateFunction(photos);
    gallery.insertAdjacentHTML('beforeend', markup);

  };

function searching(event) {
    event.preventDefault();
    page = 1
    const inputQuery = inputEl.value;
    loadMoreBtnEl.style.display="block";

    fetchHandlePhoto(inputQuery, page);
}
function fetchHandlePhoto(inputQuery, page) {

    fetchPhoto(inputQuery, page)
    .then(({ data }) => {
      if(!{data}) {
        console.log('no images to show')
      }
      console.log(data);
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
