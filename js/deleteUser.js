$(function() {
    $(".deleteUser").click(function(e) {
        e.preventDefault();
        $.ajax({
            url: "http://multifactor.loc/api/delete_user.php",
            method: "POST",
            data: {
                session_token: localStorage.getItem("token"),
                id: e.target.id.replace("d_user", "")
            }
        })
        .done(function() {
            window.location.reload();
        });
    });
})