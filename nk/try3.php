<?php
highlight_file(__FILE__);
error_reporting(0);
class first{
    public $name='welcome_to_NKCTF';
    public $arg='oww!man!';
    public function __construct(){
        $this->name='fuck';
    }
    public function __destruct(){
        if($this->name == 'welcome_to_NKCTF'){
            echo $this->arg;
        }
    }
}
unserialize($_GET['p']);
