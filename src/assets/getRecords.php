<?php
require_once "config.php";

$link = mysqli_connect($host, $user, $password, $database) 
    or die("Ошибка " . mysqli_error($link));

echo <<<EOT
{
	"Title search": "Title search title search title search", 
	"JavaScript is great!": "JavaScript is great! Really!", 
	"Google Analytics": "You might not need Google Analytics. Really.", 
	"Learn JavaScript": "It's cool, I must admit", 
	"Some text": "Some text some text some text some text some text",
	"Another text": "Another text another text another text another text"
}
EOT;
