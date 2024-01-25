<?
require("connect.php");
$sql = "SELECT status FROM `users` WHERE session_token = '$_POST[session_token]'";
$res = mysqli_query($con, $sql);
$user = mysqli_fetch_row($res);
if ($user[0] == 0) {
    if ($_POST['notChangePassword'] == 'false') {
        $sql = "UPDATE `users` SET name = '$_POST[name]', lastname = '$_POST[lastname]', 
        login = '$_POST[login]', password = '$_POST[password]', email = '$_POST[email]', 
        status = $_POST[status] WHERE id = $_POST[id]";
    } else {
        $sql = "UPDATE `users` SET name = '$_POST[name]', lastname = '$_POST[lastname]', 
        login = '$_POST[login]', email = '$_POST[email]', 
        status = $_POST[status] WHERE id = $_POST[id]";
    }
    mysqli_query($con, $sql);
    echo ($sql);
}
?>