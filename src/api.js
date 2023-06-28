import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import axios from 'axios';
import Notoflix from 'notiflix';
const searchBtnEl = document.getElementById('js-search-btn');
const loadMoreBtnEl = document.getElementById("js-more-btn");
const formEl = document.getElementById('search-form');
const inputEl = document.querySelector('input[name="searchQuery"]');

const BASE_URL = 'https://pixabay.com/api';
const API_KEY = '37960657-3cfa1dcb3808e6e9b644b5e90'

export function fetchPhoto (inputQuery) {
    const result = axios.get('https://pixabay.com/api',  {
        params:{
        key: '37960657-3cfa1dcb3808e6e9b644b5e90',   
        q: inputQuery,
        image_type:'photo',
        orientation:'horizontal',
        safesearch:'true',
        page: 3,
        per_page: 40, 
}})
.then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });

}