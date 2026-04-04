const API_KEY = process.env.REACT_APP_API_KEY;
const requests = {
  fetchDrama: `/discover/movie?api_key=${API_KEY}&with_genres=18`,
  fetchCrime: `/discover/movie?api_key=${API_KEY}&with_genres=80`,
  fetchSciFi: `/discover/movie?api_key=${API_KEY}&with_genres=878`,
  fetchAdventure: `/discover/movie?api_key=${API_KEY}&with_genres=12`,
  fetchHorror: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
};

export default requests;
