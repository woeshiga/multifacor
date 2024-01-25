<?
require("connect.php");

$sql = "SELECT user_requests.id, files.name, users.login, user_requests.request_date FROM files, users, user_requests WHERE files.id = user_requests.file_id AND users.id = user_requests.user_id";
$res = mysqli_query($con, $sql);

$requests = mysqli_fetch_all($res);

$data = array();

foreach($requests as &$request) {
    $file_dict = ["id" => $request[0], "file_name" => $request[1], "user_login" => $request[2], "date" => $request[3]];
    array_push($data, $file_dict);
}

$resp = ["data" => $data];

header("Content-Type: application/json; charset=utf-8");
echo json_encode($resp);
?>