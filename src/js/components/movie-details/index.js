import config from "../../config";

const getImageSrc = (path) => path ? `${config.imageSrc}${path}` : ''

export default data => {
    const html = `
        <div class="movie-details">
            <div style="background-image: url(${getImageSrc(data.poster_path)});" class="movie-details__icon"></div>
            <h2 class="movie-details__title">${data.title}</h2>
            <div class="movie-details__text">
                <span class="movie-details__text movie-details__text--upper">popularity: </span>${data.popularity}
            </div>
            <div class="movie-details__text">
                <span class="movie-details__text movie-details__text--upper">overview: </span>${data.overview}
            </div>
            <div class="movie-details__text">
                <span class="movie-details__text movie-details__text--upper">release date: </span>${data.release_date}
            </div>
        </div>
    `
    return html
}