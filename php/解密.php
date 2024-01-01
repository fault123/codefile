<?php
// $a='%83%7d%82%45%72%7d%71%85%7b%73%7c%84%34%75%73%84%4d%7a%73%7b%73%7c%84%4a%89%53%72%2c%26%53%5d%4b%4b%39%26%2d';
// echo(urldecode($a));
// function dec($data){
//     $str="";
//     for($i=0;$i<strlen($data);$i+=2){
//         $c=hexdec(substr($data,$i,2));
//         $b=$c^100;
//         $a=chr($b-10);
//         $str.=$a;
//     }
//     return str_rot13(strrev($str));
// }
// $data='%83%7d%82%45%72%7d%71%85%7b%73%7c%84%34%75%73%84%4d%7a%73%7b%73%7c%84%4a%89%53%72%2c%26%53%5d%4b%4b%39%26%2d';
// echo(dec($data));
function enc($data)
{
     $str="";
     $a=strrev(str_rot13($data));
          for($i=0;$i<strlen($a);$i++){         
          $b=ord($a[$i])+10;         
          $c=$b^100;         
          $e=sprintf("%02x",$c);         
          $str.=$e;
               }
     return $str; 
  } 
//$data="5a5e5a59185918595f1824581d5b195e5f595a5f1d5e275e5a585e5e585f27595e5f1c581d5f185b255e265b5e595b185b5e275f5b591c5b1d581d5b195b245e5a591c5b1c5f185b24185918";
$data="e3e65e1a5a34065f5b2b5a351905e53058075e1b2a1039120024090b14310f5b26e13e3e3404";
echo(dec($data));
function dec($data){
    $str="";
    for($i=0;$i<strlen($data);$i+=2){
        $c=hexdec(substr($data,$i,2));
        $b=$c^100;
        $a=chr($b-10);
        $str.=$a;
    }
    return str_rot13(strrev($str));
}