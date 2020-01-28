const API_KEY = "8a27658d7a5b02060836af27a9c31d3a";

export default {
    localMoviesUrl: "../../mock-data/movies.json",
    imageSrc: "http://image.tmdb.org/t/p/w185",
    playNow: page =>
        `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&page=${page}`
};
