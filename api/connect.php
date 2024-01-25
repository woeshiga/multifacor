<?
$con = mysqli_connect('localhost', 'root', '', 'main_dip');
if (!$con) {
    die("Ошибка соединения: ".mysqli_error($con));
}
?>