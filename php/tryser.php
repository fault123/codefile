<?php
// class Test{
//     public $func;
//     public $para;
//     public $copy;
// }
// $a=new Test;
// $a->func=&$a->copy;
// $a->para=array("Test","On1y0ne");
// $c= array(0=>$a,1=>NULL);
// echo(serialize($c));
// echo(urlencode(serialize($c)));
// $m='a:2:{i:0;O:4:"Test":3:{s:4:"func";N;s:4:"para";a:2:{i:0;r:2;i:1;s:7:"On1y0ne";}s:4:"copy";R:3;}i:0;N;}';
// echo(urlencode($m));
$m='O:4:"Test":4:{s:4:"func";N;s:4:"para";a:2:{i:0;s:4:"Test";i:1;s:7:"On1y0ne";}s:4:"copy";R:2;}';
echo(urlencode($m));
// class Test{
//     public $func;
//     public $para;
//     public $copy;
// }
// $a=new Test;
// $a->func=&$a->copy;
// $a->para=array("Test","On1y0ne");
// echo(serialize($a));