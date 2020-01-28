import $ from "jquery";
import movieCard from "../movie-card";
import moviesService from "../../movies-service";
import modal from "../modal";
import dropdownSort from "../dropdown-sort";

const INIT_LOAD_PAGES = 3;
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

const infinityScroll = () => {
    let currentPage = INIT_LOAD_PAGES;
    let isLoading = false

    $(window).scroll(async () => {
        const isPageBottom = $(document).height() - $(window).height() === $(window).scrollTop()

        if (!isLoading && isPageBottom) {
            try {
                isLoading = true
                currentPage += 1;
                const { results } = await moviesService.getPlayNow(currentPage);
                moviesList.push(...results);
                drawToDom(generateMoviesList(moviesList));
            } catch (err) {
                console.error("infinityScroll error:", err);
            } finally {
                isLoading = false
            }
        }
    });

};

const init = async () => {
    try {
        moviesList = await moviesService.getPlayNowPages(INIT_LOAD_PAGES);
        drawToDom(generateMoviesList(moviesList));
        dropdownSort(sort);
        infinityScroll()
    } catch (err) {
        console.error("getPlayNowPages error:", err);
    }
}

export default {
  init
}