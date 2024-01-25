$(function() {
    $("#sendQrCodeButton").click(function(e) {
        e.preventDefault();
        $.ajax({
            method: "POST",
            data:{
                code: $("#qrcode").val(),
                login: $("#login").val()
            },
            url: "http://multifactor.loc/api/qrcode.php"
        })
        .done(function(resp) {
            if (resp == 500) {
                alert("Время жизни кода вышло!");
            } else if (resp == 501) {
                alert("Неверный код!");
            } else {
                localStorage.setItem("token", resp.token);
                localStorage.setItem("login", $("#login").val());
                localStorage.setItem("status", resp.status);
                window.location.replace("/");
            }
        });
    })
});