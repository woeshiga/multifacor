<?
require('connect.php');

if ($_POST['status'] == 0) {
    $sql = "SELECT user_id, file_id FROM user_requests WHERE id = $_POST[request_id]";
    
    $res = mysqli_query($con, $sql);
    $request = mysqli_fetch_row($res);

    $sql = "INSERT INTO `file_access` (user_id, file_id) VALUES ($request[0], $request[1])";
    mysqli_query($con, $sql);

    $sql = "DELETE FROM `user_requests` WHERE id = $_POST[request_id]";
    mysqli_query($con, $sql);
}
?>