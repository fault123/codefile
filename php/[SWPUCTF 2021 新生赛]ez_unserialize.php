<?php
class wllm{
    public $admin;
    public $passwd;
    public function __construct(){
        $this->admin='admin';
        $this->passwd='ctf';
    }
}
$a=new wllm;
echo(serialize($a));