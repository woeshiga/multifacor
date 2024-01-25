<?
require("connect.php");

$sql = "SELECT id FROM `users` WHERE session_token = '$_GET[token]'";
$res = mysqli_query($con, $sql);

$user = mysqli_fetch_row($res);

$sql = "SELECT files.id, files.name, files.file_path, files.description, files.date_added FROM `files`, `file_access` WHERE files.id = file_access.file_id AND
file_access.user_id = $user[0]";
$res = mysqli_query($con, $sql);

$files = mysqli_fetch_all($res);

$data = array();

foreach($files as &$file) {
    $file_dict = ["id" => $file[0], "name" => $file[1], "file_path" => $file[2], "description" => $file[3], "date_added" => $file[4]];
    array_push($data, $file_dict);
}

$resp = ["data" => $data];

header("Content-Type: application/json; charset=utf-8");
echo json_encode($resp);
?>