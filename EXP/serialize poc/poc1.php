<?php
class C{
    public $s;
    public $str;
    public function __construct(){
        $this->str=new B;
    }
}
class B{
    public $b;
    public function __construct(){
        $this->b=new A;
    }
}
class A{
    public $key;
}