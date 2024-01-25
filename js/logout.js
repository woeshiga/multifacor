$(function() {
    $("#logoutButton").click(function(e) {
        e.preventDefault();
        $.ajax({
            url: "http://multifactor.loc/api/logout.php",
            method: "POST",
            data: {
                login: localStorage.getItem("login")
            }
        })
        .done(function(resp) {
            if (resp == 200) {
                localStorage.clear();
                window.location.replace("/");
            }
        });
    });
})