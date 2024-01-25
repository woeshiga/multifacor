<?
require("connect.php");

$sql = "SELECT * FROM `files`";
$res = mysqli_query($con, $sql);

$files = mysqli_fetch_all($res);

$data = array();

foreach($files as &$file) {
    $file_dict = ["id" => $file[0], "name" => $file[1], "file_path" => $file[3], "description" => $file[2], "date_added" => $file[4]];
    array_push($data, $file_dict);
}

$resp = ["data" => $data];

header("Content-Type: application/json; charset=utf-8");
echo json_encode($resp);
?>