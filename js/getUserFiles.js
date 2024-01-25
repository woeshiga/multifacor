$(function() {
    $.ajax({
        url: 'http://multifactor.loc/api/get_user_files.php',
        method: 'GET',
        data: {
            token: localStorage.getItem('token')
        }
    })
    .done(function(resp) {
        console.log(resp);
        if (resp.data.length == 0) {
            let row = $("<tr></tr>");
            let col = $("<td colspan=4>Нет файлов!</td>");
            row.append(col);
            $('.filesList').append(row);
        } else {
            resp.data.forEach(file => {
                let row = $("<tr></tr>");
                row.append($(`<td>${file.id}</td>`));
                row.append($(`<td>${file.name}</td>`));
                row.append($(`<td>${file.description}</td>`));
                row.append($(`<td>${file.date_added}</td>`));
                let col = $(`<td></td>`);
                let button = $(`<a class='getAccessFileButton' id='df${file.id}' target='_blank' href='http://multifactor.loc/api/download_file.php?file=${file.file_path}'>Скачать файл</a>`);
                col.append(button);
                row.append(col);
                $('.filesList').append(row);
            });
            $('body').append("<script src='../js/getAccess.js'></script>");
        }
    });
})