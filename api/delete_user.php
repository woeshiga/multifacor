<?
require("connect.php");
$sql = "SELECT status FROM `users` WHERE session_token = '$_POST[session_token]'";
$res = mysqli_query($con, $sql);
$user = mysqli_fetch_row($res);
if ($user[0] == 0) {
    $sql = "DELETE FROM `users` WHERE id = $_POST[id]";
    mysqli_query($con, $sql);
}
?>