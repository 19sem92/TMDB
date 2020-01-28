import $ from "jquery";
import movieCard from "../movie-card";
import moviesService from "../../movies-service";
import modal from "../modal";
import dropdownSort from "../dropdown-sort";

let moviesList = [];
const moviesWrapper = $(".movies-list");

const findMovieById = (movies, id) =>
    movies.find(movie => movie.id === parseInt(id));

moviesWrapper.on("click", e => {
    const movieCardId = $(e.target)
        .closest(".movie-card")
        .attr("data-id");
    modal.open(findMovieById(moviesList, movieCardId));
});

const drawToDom = element => {
    moviesWrapper.html("");
    moviesWrapper.append(element);
};

const generateMoviesList = movies => movies.map(movie => movieCard(movie));

const filters = {
    "rating-max"(movies) {
        return movies.sort((a, b) => b.popularity - a.popularity);
    },
    "rating-min"(movies) {
        return movies.sort((a, b) => a.popularity - b.popularity);
    }
};

const sort = filter => {
    const list = filters[filter]([...moviesList]);

    drawToDom(generateMoviesList(list));
};

const init = async () => {
    dropdownSort(sort);

    moviesService.getLocalMovies()
        .then(data => {
            moviesList = data
            drawToDom(generateMoviesList(moviesList))
        })
}

export default {
  init
}