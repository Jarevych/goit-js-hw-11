import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import axios from 'axios';
import Notoflix from 'notiflix';
// import imageCard from './template.hbs'

const searchBtnEl = document.getElementById('js-search-btn');
const loadMoreBtnEl = document.getElementById('js-more-btn');
const formEl = document.getElementById('search-form');
const inputEl = document.querySelector('name=[searchQuery]');

const BASE_URL = '';

loadMoreBtnEl.style.visibility = 'hidden';
