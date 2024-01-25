<?
require("connect.php");

$prompt = $_GET['prompt'];
$sql = "SELECT name, lastname, login FROM `users` WHERE name LIKE '%$prompt%' OR lastname LIKE '%$prompt%' OR login LIKE '%$prompt%'";
$res = mysqli_query($con, $sql);
$users = mysqli_fetch_all($res);

$data = array();

foreach($users as &$user) {
    $user_dict = ["name" => $user[0], "lastname" => $user[1], "login" => $user[2]];
    array_push($data, $user_dict);
}

$resp = ["data" => $data];

header("Content-Type: application/json; charset=utf-8");
echo json_encode($resp);
?>