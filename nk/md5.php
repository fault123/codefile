<?php
$c=$_POST['a'];
$b=$_POST['t'];
if (isset($c)&&isset($b)){
    $a1=(string)$c;
    $a2=(string)$b;
    echo(sha1($a1));
    echo("aaaaaaa");
    echo(sha1($a2));
    if($a1 == $a2){
        die("fuck????");
    }
    if(md5($a1) === md5($a2)){
        echo "you find it!";
    }
    else{
        die("you failed!");
    }
}
else {
    show_source(__FILE__);
}
?>
