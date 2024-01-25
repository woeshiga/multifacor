<?
require('connect.php');

$file = $_FILES['file'];

$uploaddir = './files/';

$uploadfile = $uploaddir.basename($file['name']);

move_uploaded_file($file['tmp_name'], $uploadfile);

$sql = "INSERT INTO `files` (name, description, file_path) VALUES ('$_POST[name]', '$_POST[description]', '$file[name]')";
mysqli_query($con, $sql);

echo 'Успех!';

?>