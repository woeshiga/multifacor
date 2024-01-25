$(function() {
    $(".editUser").click(function(e) {
        e.preventDefault();
        let users = JSON.parse(localStorage.getItem("users"));
        console.log(users);
        $("#name").val(users.find(user => user.id === e.target.id.replace("e_user", "")).name);
        $("#lastname").val(users.find(user => user.id === e.target.id.replace("e_user", "")).lastname);
        $("#login").val(users.find(user => user.id === e.target.id.replace("e_user", "")).login);
        $("#email").val(users.find(user => user.id === e.target.id.replace("e_user", "")).email);
        $("#status").val(users.find(user => user.id === e.target.id.replace("e_user", "")).status);
        $("#userId").val(e.target.id.replace("e_user", ""));
        $(".modalContainer").css("display", "flex");
    });
    $("#closeModal").click(function(e) {
        e.preventDefault();
        $(".modalContainer").css("display", "none");
    })

    $("#sendEditDataButton").click(function(e) {
        e.preventDefault();
        console.log(e.target);
        let name = $('#name').val();
        let lastname = $('#lastname').val();
        let email = $('#email').val();
        let status = $('#status').val();
        let password = $('#password').val();
        let login = $("#login").val();
        let notChangePassword = $('#notChangePassword').is(":checked");
        $.ajax({
            url: "http://multifactor.loc/api/edit_user.php",
            method: "POST",
            data: {
                name: name,
                lastname: lastname,
                email: email,
                status: status,
                password: sha512(password),
                notChangePassword: notChangePassword,
                login: login,
                id: $("#userId").val()
            }
        })
        .done(function(resp) {
            console.log(resp);
            window.location.reload();
        });
    });
})