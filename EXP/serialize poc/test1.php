<?php
highlight_file( FILE_);
class A{
    public $key;
    public function readflag(){
        if($this->key==="key"){
            readfile('/flag');
        }
    }
}
class B{
    public function _toString(){
        return ($this->b)();
    }
}
class C{
    public $s;
    public $str;
    public function __construct($s){
        $this->s=$s;
    }
    public function __destruct(){
        echo $this->str;
    }
}

$ser = serialize(new C($_GET['c']));
$data = str_ireplace("\0","00",$ser);
unserialize($data);
