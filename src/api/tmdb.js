const API_KEY = '9813ce01a72ca1bd2ae25f091898b1c7';

const BASE_URL = 'https://api.themoviedb.org/3';

export const endpoints = {
  popularity: `${BASE_URL}/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc`,
  voted: `${BASE_URL}/discover/movie?api_key=${API_KEY}&sort_by=vote_count.desc`,
  release: `${BASE_URL}/discover/movie?api_key=${API_KEY}&sort_by=release_date.desc`,
  rating: `${BASE_URL}/discover/movie?api_key=${API_KEY}&sort_by=vote_average.desc&vote_count.gte=100`,
};

export const fetchMovies = async (type = 'popularity') => {
  try {
    let url = endpoints.popularity;

    switch (type) {
      case 'voted':
        url = endpoints.voted;
        break;
      case 'release':
        url = endpoints.release;
        break;
      case 'rating':
        url = endpoints.rating;
        break;
      default:
        url = endpoints.popularity;
    }

    const response = await fetch(url);
    const data = await response.json();

    return data.results || [];
  } catch (error) {
    console.log(error);
    return [];
  }
};
