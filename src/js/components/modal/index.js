import $ from "jquery";
import generateMovieDetails from "../movie-details";

const modalElement = $(".modal");
const modalContentElement = $(".modal__content");
const closeButton = $(".modal__close");
const body = $("body");

modalElement.on("mousedown", function(e) {
    if (e.target !== this) return;
    close();
});

closeButton.on("click", () => {
    close();
});

const addEventListenerOnEscButton = () => {
    $(document).on("keyup", e => {
        if (e.keyCode === 27) {
            close();
        }
    });
};

const removeEventListenerOnEscButton = () => {
    $(document).off("keyup");
};

const open = data => {
    body.css({ overflow: "hidden" });
    modalContentElement.html(generateMovieDetails(data));
    modalElement.fadeIn(500);
    addEventListenerOnEscButton();
};

const close = () => {
    removeEventListenerOnEscButton();
    modalElement.fadeOut(500, () => {
        body.css({ overflow: "auto" });
        modalContentElement.html("");
    });
};

export default {
    open,
    close
};
