<?php
class boy{
    public $like;
}
class girl{
    public $boyname;
}
class helper{
    public $name;
    public $string;
}
class love_story{
    public $fall_in_love=array("girl_and_boy");
}


$a=new boy;
$a->like=new girl;
$a->like->boyname=new helper;
$a->like->boyname->name=new boy;
$a->like->boyname->name->like=new helper;
$a->like->boyname->name->like->string['string']=array( new love_story,'love');
print(serialize($a));



