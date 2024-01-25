$(function() {
    $("#closeModal").click(function(e) {
        e.preventDefault();
        $(".modalContainer").css("display", "none");
    })
    $("#sendLoginButton").click(function(e) {
        e.preventDefault();
        let login = $("#login").val();
        let password = $("#password").val();
        $.ajax({
            method: 'POST',
            url:'http://multifactor.loc/api/login.php',
            data: {
                login: login,
                password: sha512(password)
            }
        })
        .done(function(resp) {
            console.log(resp);
            if(resp == 220) {
                $(".modalContainer").css("display", "flex");
            } else {
                alert(resp);
            }
        });
    });
});