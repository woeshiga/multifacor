<?
require("../api/connect.php");
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../css/main.css">
    <script src="https://code.jquery.com/jquery-3.7.1.js" integrity="sha256-eKhayi8LEQwp4NKxN+CfCh+3qOVUtJn3QNZ0TciWLP4=" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/js-sha512/0.8.0/sha512.min.js" integrity="sha512-KUrAWA1oxsWKHBaA2mlZyRuR8zzzHHYgpDfkfPrT3FhlZ4YdXbXyE89VHI6WmWradSHtuZjLyLAMP2F7IWK4JQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <title>Главная страница</title>
</head>
<? require("../components/header.php"); ?>
<script src="../js/navPanel.js" ></script>
<body>
    <script src="../js/checkAuth.js"></script>
    <div class="hiddenTable">
        <div class="tableData">

        </div>
        <button id='closeTable'>Закрыть</button>
    </div>
</body>
</html>