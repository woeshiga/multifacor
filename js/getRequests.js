$(function() {
    $.ajax({
        url: 'http://multifactor.loc/api/get_requests.php',
        method: 'GET'
    })
    .done(function(resp) {
        if (resp.data.length == 0) {
            let row = $("<tr></tr>");
            let col = $("<td colspan=5>Нет запросов!</td>");
            row.append(col);
            $('.requestsList').append(row);
        } else {
            resp.data.forEach(request => {
                let row = $("<tr></tr>");
                row.append($(`<td>${request.id}</td>`));
                row.append($(`<td>${request.file_name}</td>`));
                row.append($(`<td>${request.user_login}</td>`));
                row.append($(`<td>${request.date}</td>`));
                row.append($(`<td><button class='allowAccessFileButton' id='aa${request.id}'>Предоставить доступ</button> <button class='denyAccessFileButton' id='da${request.id}'>Откзать в доступе</button></td>`));
                $('.requestsList').append(row);
            });
        }
        $('body').append("<script src='../js/allowAccess.js'></script>");
        $('body').append("<script src='../js/denyAccess.js'></script>");
    });
})