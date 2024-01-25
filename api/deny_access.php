<?
require('connect.php');

if ($_POST['status'] == 0) {

    $sql = "DELETE FROM `user_requests` WHERE id = $_POST[request_id]";
    mysqli_query($con, $sql);
}
?>