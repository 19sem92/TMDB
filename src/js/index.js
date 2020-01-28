import $ from "jquery";
import moviesList from "./components/movies-list";

$(async () => {
    await moviesList.init()
});
