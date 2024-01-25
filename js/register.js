$(function() {
    $("#sendRegisterButton").click(function(e) {
        e.preventDefault();
        let userName = $("#name").val();
        let lastName = $("#lastname").val();
        let login = $("#login").val();
        let email = $("#email").val();
        let password = $("#password").val();
        let repeatPW = $("#repeatPW").val();
        if (password != repeatPW) {
            alert("Пароли не совпадают!");
            return;
        }
        $.ajax({
            method: 'POST',
            url:'http://multifactor.loc/api/register.php',
            data: {
                name: userName,
                lastname: lastName,
                login: login,
                email: email,
                password: sha512(password)
            }
        })
        .done(function(resp) {
            alert(resp);
            console.log(resp);
        });
    });
});