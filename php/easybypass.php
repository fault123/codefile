<?php
$comm1=$_GET['comm1'];
$comm2=$_GET['comm2'];

$comm1 = '"' . $comm1 . '"';
$comm2 = '"' . $comm2 . '"';
$file="file $comm1 $comm2";
echo $file;
system($file);
?>
