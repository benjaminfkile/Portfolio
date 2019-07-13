
function hamburgerClick(args) {
    args.classList.toggle("change");
    menuChecked++;
    if (menuChecked % 2 !== 0) {
        console.log("checked");
        menuExpand();
    } else {
        console.log("unchecked");
        menuCollapse();
    }
}
function menuExpand() {
    $(".menuPhone").fadeIn();
}
function menuCollapse() {

    console.log("collapse");
    $(".menuPhone").fadeOut();
}
$(document).ready(function () {
  $(".menuPhone").hide();
});
var menuChecked = 0;