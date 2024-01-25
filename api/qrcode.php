<?
require("connect.php");
$sql = "SELECT secret_code, sc_time, status FROM users WHERE login = '$_POST[login]'";
$res = mysqli_query($con, $sql);
$user = mysqli_fetch_row($res);
if (time() - strtotime($user[1]) >= 500) {
    echo(500);
    die;
}
if ($_POST['code'] != $user[0]) {
    echo(501);
    die;
}
$alphabet = "qwertyuiop[]asdfghjkl;zxcvbnm,./QWERTYUIOP{}ASDFGHJKL:|ZXCVBNM<>?0123456789";
$token = "";
for ($i = 0; $i < 64; $i++) {
    $token .= $alphabet[rand(0, 75)];
}

$sql = "UPDATE users SET session_token = '$token' WHERE login = '$_POST[login]'";
mysqli_query($con, $sql);

$resp = ["token" => $token, "status" => $user[2], "sql" => $sql];
header('Content-Type: application/json; charset=utf-8');
echo json_encode($resp);
?>