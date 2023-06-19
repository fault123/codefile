<?php
$a="file=hint.php?";
$a=mb_substr(
    $a,
    0,
    13
);
var_dump($a);