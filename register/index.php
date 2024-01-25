<?
require("../api/connect.php");
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../css/main.css">
    <script src="https://code.jquery.com/jquery-3.7.1.js" integrity="sha256-eKhayi8LEQwp4NKxN+CfCh+3qOVUtJn3QNZ0TciWLP4=" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/js-sha512/0.8.0/sha512.min.js" integrity="sha512-KUrAWA1oxsWKHBaA2mlZyRuR8zzzHHYgpDfkfPrT3FhlZ4YdXbXyE89VHI6WmWradSHtuZjLyLAMP2F7IWK4JQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <script src="../js/register.js"></script>
    <title>Регистрация</title>
</head>
<body>
    <div class="home">
        <a href="/">
            <img src="https://clipart-library.com/new_gallery/674941_home-icon-png-transparent.jpg" alt="">
        </a>
    </div>
    <div class="container">
        <div class="formBlock">
            <form action="/api/register.php" method="POST">
                <legend>
                    <h2>
                        Регистрация
                    </h2>
                </legend>
                <label for="name">Имя:</label>
                <input type="text" name="name" id="name" placeholder="Введите..." required>
                <label for="lastname">Фамилия:</label>
                <input type="text" name="lastname" id="lastname" placeholder="Введите..." required>
                <label for="login">Логин:</label>
                <input type="text" name="login" id="login" placeholder="Введите..." required>
                <label for="email">E-mail:</label>
                <input type="email" name="email" id="email" placeholder="Введите..." required>
                <label for="password">Пароль:</label>
                <input type="password" name="password" id="password" placeholder="Введите..." required>
                <label for="repeatPW">Повторите пароль:</label>
                <input type="password" name="repeatPW" id="repeatPW" placeholder="Введите..." required>
                <button class="registerButton" id="sendRegisterButton">Регистрация</button>
            </form>
        </div>
    </div>
</body>
</html>