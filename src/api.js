import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import axios from 'axios';
import Notiflix from 'notiflix';
const searchBtnEl = document.getElementById('js-search-btn');
const loadMoreBtnEl = document.getElementById("js-more-btn");
const formEl = document.getElementById('search-form');
const inputEl = document.querySelector('input[name="searchQuery"]');
const page = 0;

const BASE_URL = 'https://pixabay.com/api';
const API_KEY = '37960657-3cfa1dcb3808e6e9b644b5e90'

export default async function fetchPhoto (inputQuery, page) {

    return await axios.get(BASE_URL,  {
        params:{
        key: '37960657-3cfa1dcb3808e6e9b644b5e90',   
        q: inputQuery,
        image_type:'photo',
        orientation:'horizontal',
        safesearch:'true',
        page: page,

        per_page: 40, 
}})
.then(response => {
  return {
    ok: true,
    data: response.data,
  };
})
.catch(error => {
  return {
    ok: false,
    error: error.message,
  };
});

}
