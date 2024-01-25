<?
require("connect.php");
$login = $_POST["login"];
$email = $_POST['email'];
$sql = "SELECT login FROM users WHERE login = '$login'";
$res = mysqli_query($con, $sql);
$users = mysqli_fetch_row($res);
if ($users) {
    echo("Пользователь с таким логином уже существует!");
    die();
}
$sql = "SELECT email FROM users WHERE email = '$email'";
$res = mysqli_query($con, $sql);
$users = mysqli_fetch_row($res);
if ($users) {
    echo("Пользователь с таким email уже существует!");
    die();
}
$sql = "INSERT INTO `users` (name, lastname, login, email, password) VALUES ('$_POST[name]', '$_POST[lastname]', '$_POST[login]', '$_POST[email]', '$_POST[password]')";
$res = mysqli_query($con, $sql);
if (!$res) {
    echo("Ошибка выполнения запроса: ".mysqli_error($con));
}
?>