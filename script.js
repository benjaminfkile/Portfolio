
function hamburgerClick(args) {
    args.classList.toggle("change");
    menuChecked++;
    if (menuChecked % 2 !== 0) {
        console.log("checked");
        menuExpand();
        $(".bio").hide();      
    } else {
        console.log("unchecked");
        menuCollapse();
        $(".bio").show();
    }
}
function menuExpand() {
    $(".menuPhone").slideDown();
}
function menuCollapse() {
    console.log("collapse");
    $(".menuPhone").slideUp();
}
$(document).ready(function () {
  $(".menuPhone").hide();
});
var menuChecked = 0;