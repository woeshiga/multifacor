$(function() {
    $("#findUserButton").click(function(e) {
        e.preventDefault();
        if ($("#prompt").val() != '') {
            $.ajax({
                url: "http://multifactor.loc/api/find_user.php",
                method: "GET",
                data: {
                    prompt: $("#prompt").val()
                }
            })
            .done(function(resp) {
                console.log(resp);
                let users = resp.data;
                if (users.length > 0) {
                    let table = $('<table>');
                    let headerRow = $('<tr>');
                    headerRow.append($('<th>').text("Имя"));
                    headerRow.append($('<th>').text("Фамилия"));
                    headerRow.append($('<th>').text("Логин"));
                    table.append(headerRow);
                    
                    $.each(users, function(index, user) {
                        let row = $('<tr>');
                        row.append($('<td>').text(user.name));
                        row.append($('<td>').text(user.lastname));
                        row.append($('<td>').text(user.login));
                        table.append(row);
                    })
                    $('.tableData').html(table);
                } else {
                    $('.tableData').html("Пользователей не найдено!");
                }
                $('.hiddenTable').css('display', 'block');
            });
        } else {
            alert("Необходимо ввести имя, фамилию или логин пользователя!");
        }
    });
    $('#closeTable').click(function(e) {
        e.preventDefault();
        $('.hiddenTable').css('display', 'none');
    });
});