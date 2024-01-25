<?
require('connect.php');

if ($_POST['status'] == 0) {
    $sql = "INSERT INTO `file_access` (user_id, file_id) VALUES ($_POST[user_id], $_POST[file_id])";
    mysqli_query($con, $sql);
}
?>