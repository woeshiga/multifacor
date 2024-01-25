<?
require("connect.php");
$login = $_POST["login"];
$password = $_POST['password'];
$sql = "SELECT login, password, email, secret_code, sc_time FROM users WHERE login = '$login'";
$res = mysqli_query($con, $sql);
$user = mysqli_fetch_row($res);
if (!$user) {
    echo("Пользователя с таким логином не существует!");
    die();
}
if ($password != $user[1]) {
    echo("Пароль не верен!");
    die();
}
mysqli_query($con, $sql);

if (!$user[3] || time() - strtotime($user[4]) >= 300) {
    $alphabet = "qwertyuiop[]asdfghjkl;'\zxcvbnm,./QWERTYUIOP{}ASDFGHJKL:|ZXCVBNM<>?0123456789";
    $code = $alphabet[rand(0, 75)].$alphabet[rand(0, 75)].$alphabet[rand(0, 75)]
    .$alphabet[rand(0, 75)].$alphabet[rand(0, 75)].$alphabet[rand(0, 75)];
    $sql = "UPDATE users SET secret_code = '$code', sc_time = NOW() WHERE email = '$user[2]'";
    mysqli_query($con, $sql);
    require_once __DIR__ . '/phpqrcode/qrlib.php';
    QRcode::png($code, "qrcodes/$user[2].png", 'Q', 8);
}
$to      = "$user[2]";
$file_name="qrcodes/$user[2].png";
$subj="QR-код для входа";
$bound="spravkaweb-1234";
$headers="From: dlymusora00@mail.ru\n";
$headers.="To: $user[2]\n";
$headers.="Subject: $subj\n";
$headers.="Mime-Version: 1.0\n";
$headers.="Content-Type: multipart/related; boundary=\"$bound\"\n";
$body="--$bound\n";
$body.="Content-type: text/html; charset=\"utf-8\"\n";
$body.="Content-Transfer-Encoding: 8bit\n\n";
$body.="<h3>Привет</h3>
Для входа необходимо ввести проверочный код.<br>
Для того, чтобы его получить нужно отсканировать QR-код (для того, чтобы отсканировать с ПК, воспользуйтейсь <a href='https://qrcodescanneronline.com/ru/'>сканером</a>):<br>
<img src=\"cid:img_1\">";
$body.="\n\n--$bound\n";
$body.="Content-Type: image/jpeg; name=\"".basename($file_name)."\"\n";
$body.="Content-Transfer-Encoding:base64\n";
$body.="Content-ID: img_1\n\n";
$f=fopen($file_name,"rb");
$body.=base64_encode(fread($f,filesize($file_name)))."\n";
$body.="--$bound--\n\n";
mail($to, $subj, $body, $headers);

echo(220);
?>