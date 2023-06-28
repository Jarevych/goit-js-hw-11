import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import axios from 'axios';
import Notoflix from 'notiflix';
// import imageCard from './template.hbs'
import { fetchPhoto } from "./api";

const searchBtnEl = document.getElementById('js-search-btn');
const loadMoreBtnEl = document.getElementById("js-more-btn");
const formEl = document.getElementById('search-form');
const inputEl = document.querySelector('input[name="searchQuery"]');

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '37960657-3cfa1dcb3808e6e9b644b5e90'

loadMoreBtnEl.style.display="none";

formEl.addEventListener('submit', searching)

// inputQuery = inputEl.value;

function searching(event) {
    event.preventDefault();
    console.log(inputEl.value);
    fetchPhoto(inputEl.value)
}

