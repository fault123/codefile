<?php
$a="../flag.php";
function hacked($s) {
    if(substr($s, 0,1) == '/'){
        die('´ôjio²½');
    }
    $s = preg_replace('/\.\.*/', '.', $s);
    $s = urldecode($s);
    $s = htmlentities($s, ENT_QUOTES, 'UTF-8');
    return strip_tags($s);
}
echo(hacked($a));