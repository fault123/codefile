<?php
class Name{
    public $username;
    public $password;
    public function __construct(){
        $this->username='admin';
        $this->password=100;
    }
}
$a=new Name;
echo(serialize($a));