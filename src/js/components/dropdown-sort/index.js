import $ from "jquery";

const dropdownSort = $(".dropdown-sort");

export default sortMethod => {
    dropdownSort.on("click", e => {
        e.preventDefault();
        const target = $(e.target);
        const dataAttr = target.attr("data-sort");
        if (!dataAttr) return;

        sortMethod(dataAttr);
    });
};
