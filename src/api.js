import axios from 'axios';
const BASE_URL = 'https://pixabay.com/api';
const API_KEY = '37960657-3cfa1dcb3808e6e9b644b5e90'

export default async function fetchPhoto (inputQuery, page) {

    return await axios.get(BASE_URL,  {
        params:{
        key: API_KEY,   
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
  console.warn('no photos more')
});
}
