$(function() {
    if (localStorage.getItem("status") == 0) {
        window.location.replace("users");
    } else if (localStorage.getItem("status") == 1) {
        window.location.replace("user_files");
    }
})