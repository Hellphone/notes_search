<?php
require_once "config.php";

$link = mysqli_connect($host, $user, $password, $database) 
    or die("Ошибка " . mysqli_error($link));

$query = "SELECT title, text FROM records";
$result = mysqli_query($link, $query) or die("Ошибка " . mysqli_error($link));
if ($result) {
	$arResult = [];

	$rows = mysqli_num_rows($result);

	while ($row = mysqli_fetch_row($result)) {
		$arResult[$row[0]] = $row[1];
	}

	echo json_encode($arResult);
}

mysqli_close($link);
