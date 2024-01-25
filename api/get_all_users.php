<?
require("connect.php");
$sql = "SELECT id, name, lastname, login, email, status FROM `users`";
$res = mysqli_query($con, $sql);

$users = mysqli_fetch_all($res);

$data = array();

foreach($users as &$user) {
    $user_dict = ["id" => $user[0], "name" => $user[1], "lastname" => $user[2], "login" => $user[3], "email" => $user[4], "status" => $user[5]];
    array_push($data, $user_dict);
}

$resp = ["data" => $data];

header("Content-Type: application/json; charset=utf-8");
echo json_encode($resp);
?>