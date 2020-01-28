import $ from "jquery";
import config from "../../config";

const getImageSrc = path => (path ? `${config.imageSrc}${path}` : "");

export default ({ original_title, poster_path, id }) => {
    const movieCard = $("<div/>", {
        class: "movie-card"
    }).attr("data-id", id);

    const image = $("<img/>", {
        src: getImageSrc(poster_path),
        alt: original_title || "movie card",
        class: "movie-card__image"
    });

    return movieCard.append(image);
};
