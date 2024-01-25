<?
require("connect.php");
$sql = "UPDATE users SET session_token = NULL WHERE login = '$_POST[login]'";
mysqli_query($con, $sql);
echo(200);
?>  