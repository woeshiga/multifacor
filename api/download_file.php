<?
$file = './files/'.$_GET['file'];
header('Content-Type: multipart/mixed');
header('Content-Disposition: attachment; filename="'.$_GET['file'].'"');
readfile($file);
?>