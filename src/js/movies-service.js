import config from "./config";

const getLocalMovies = () => fetch(config.localMoviesUrl)
    .then(res => res.json())

export default {
  getLocalMovies,
};
