$(function() {
    $.ajax({
        url: 'http://multifactor.loc/api/get_files.php',
        method: 'GET'
    })
    .done(function(resp) {
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
                if (localStorage.getItem('status') == 0) {
                    let col = $(`<td></td>`);
                    let button = $(`<button class='getAccessFileButton' id='ga${file.id}'>Дать доступ</button>`);
                    let select = $(`<select id="uf${file.id}"></select>`);
                    JSON.parse(localStorage.getItem('users')).forEach(user => {
                        select.append($(`<option value='us${user.id}'>${user.login}</option>`));
                    });
                    col.append(button);
                    col.append(select);
                    row.append(col);
                } else {
                    row.append($(`<td><button class='requestAccessFileButton' id='ra${file.id}'>Запросить доступ</button></td>`));
                }
                $('.filesList').append(row);
            });
            if (localStorage.getItem('status') == 0) {
                $('body').append(`<form id='newFileForm' enctype="multipart/form-data" action="http://multifactor.loc/api/add_file.php" method="POST">
                <input type="hidden" name="MAX_FILE_SIZE" value="30000" />
                <label for="name">Имя файла:</label>
                <input type="text" name='name' id='name' placeholder='Введите...'>
                <label for="description">Описание файла:</label>
                <input type="text" name='description' id='description' placeholder='Введите...'>
                Отправить этот файл: <input name="file" type="file" />
                <input type="submit" value="Отправить файл" />`);
            }
            $('body').append("<script src='../js/getAccess.js'></script>");
            $('body').append("<script src='../js/requestAccess.js'></script>");
        }
    });
})