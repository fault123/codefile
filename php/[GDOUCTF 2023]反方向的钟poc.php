<?php
class school{
    public $department;
    public $headmaster;
    public function __construct(){
        $this->department=new classroom;
        $this->headmaster='ong';
    }
}
class classroom{
    public $name;
    public $leader;
    public function __construct(){
        $this->name='one class';
        $this->leader=new teacher;
    }
}
class teacher{
    public $name;
    public $rank;
    public $salary;
    public function __construct(){
        $this->name='ing';
        $this->rank='department';
    }
}
$a=new school;
echo(base64_encode(serialize($a)));