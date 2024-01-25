<?
require('connect.php');

$sql = "SELECT id FROM `users` WHERE login = '$_POST[user]'";
$res = mysqli_query($con, $sql);
$user = mysqli_fetch_row($res);
$sql = "INSERT INTO `user_requests` (user_id, file_id) VALUES ($user[0], $_POST[file_id])";
mysqli_query($con, $sql);

echo $sql;

?>