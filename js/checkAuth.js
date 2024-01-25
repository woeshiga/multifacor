$(function() {
    if (!localStorage.getItem('token')) {
        fetch("./components/unauth.html")
        .then(resp => resp.text())
        .then(text => $("body").append(text));
        return;
    }
    $.ajax({
        url: "http://multifactor.loc/api/get_token.php",
        method: "GET",
        data: {
            login: localStorage.getItem("login")
        }
    })
    .done(function(resp) {
        if (!resp) {
            fetch("./components/unauth.html")
            .then(resp => resp.text())
            .then(text => $("body").append(text));
        } else {
            fetch("../components/auth.html")
            .then(resp => resp.text())
            .then(text => $("body").append(text));
        }
    })
    .then(() => {
        if (localStorage.getItem("status") == 0) {
            $.ajax({
                url: "http://multifactor.loc/api/get_all_users.php",
                method: "GET"
            })
            .done(function(resp) {
                localStorage.setItem("users", JSON.stringify(resp.data));
                $(".container").append(`<table class='users'>
                    <tr>
                        <th>
                            ID
                        </th>
                        <th>
                            Имя
                        </th>
                        <th>
                            Фамилия
                        </th>
                        <th>
                            Логин
                        </th>
                        <th>
                            Email
                        </th>
                        <th>
                            Статус
                        </th>
                        <th>
                            Действия
                        </th>
                    </tr>
                </table>`);
                resp.data.forEach(user => {
                    $('.users').append(`
                        <tr>
                            <td>
                                ${user.id}
                            </td>
                            <td>
                                ${user.name}
                            </td>
                            <td>
                                ${user.lastname}
                            </td>
                            <td>
                                ${user.login}
                            </td>
                            <td>
                                ${user.email}
                            </td>
                            <td>
                                ${user.status}
                            </td>
                            <td>
                                <button class="adminActionButton deleteUser" id="d_user${user.id}">Удалить</button>
                                <button class="adminActionButton editUser" id="e_user${user.id}">Изменить</button>
                                <button class="adminActionButton dropUserSession" id="ds_user${user.id}">Завершить сессию</button>
                            </td>
                        </tr>
                    `)
                });                    
                $("body").append("<script src='../js/deleteUser.js'></script>");
                $("body").append("<script src='../js/dropUserSession.js'></script>");
                $("body").append("<script src='../js/editUser.js'></script>");
                $("body").append(`
                    <div class="modalContainer">
                        <div class="modalWindow">
                            <h2>
                                Введите новые данные
                            </h2>
                            <form>
                                <label for="name">Имя:</label>
                                <input type="text" name="name" id="name" placeholder="Введите...">
                                <label for="lastname">Фамилия:</label>
                                <input type="text" name="lastname" id="lastname" placeholder="Введите...">
                                <label for="login">Логин:</label>
                                <input type="text" name="login" id="login" placeholder="Введите...">
                                <label for="password">Пароль:</label>
                                <input type="password" name="password" id="password" placeholder="Введите...">
                                <label for="notChangePassword">Оставить пароль прежним? </label>
                                <input type="checkbox" name="notChangePassword" id="notChangePassword" checked>
                                <label for="email">Email:</label>
                                <input type="email" name="email" id="email" placeholder="Введите...">
                                <label for="status">Статус:</label>
                                <input type="number" name="status" id="status" placeholder="Введите...">
                                <input type="hidden" id="userId">
                                <button class="loginButton" id="sendEditDataButton">Отправить</button>
                            </form>
                            <button id="closeModal">
                                Отмена
                            </button>
                        </div>
                    </div>
                `);
            });
        }
    });
});