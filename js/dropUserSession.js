$(function() {
    $(".dropUserSession").click(function(e) {
        e.preventDefault();
        $.ajax({
            url: "http://multifactor.loc/api/drop_user_session.php",
            method: "POST",
            data: {
                session_token: localStorage.getItem("token"),
                id: e.target.id.replace("ds_user", "")
            }
        })
        .done(function() {
            window.location.reload();
        });
    });
})