$(function() {
    if (localStorage.getItem("status") == 0) {
        $(".navItem.admin").css("display", "block");
    } else {
        $(".navItem.admin").css("display", "none");
    }
})