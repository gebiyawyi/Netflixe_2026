const API_KEY=process.env.REACT_APP_apiKey;
const reaqust = {
  fechingtv1: `/discover/movie?api_key=${API_KEY}&with_genres= 18`,
  fechingtv2: `/discover/movie?api_key=${API_KEY}&with_genres=80 `,
  feching: `/discover/movie?api_key=${API_KEY}&with_genres=878`,
  feching1movie3: `/discover/movie?api_key=${API_KEY}&with_genres=12`,
  fechingmovie3: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
};
export default reaqust;