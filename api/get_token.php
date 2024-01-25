<?
require("connect.php");
$sql = "SELECT session_token FROM users WHERE login = '$_GET[login]'";
$res = mysqli_query($con, $sql);
$token = mysqli_fetch_row($res);
if (!$token[0]) {
    echo(NULL);
} else {
    echo($token[0]);
}
?>