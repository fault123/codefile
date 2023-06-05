<?php
class love_story {
    public $fall_in_love=array("girl_and_boy");

    public function love() {
        array_walk($this, function($make, $colo){
            echo $make[0];
            echo "<br>";
            echo $colo;
        });
    }
}
$exp = new love_story;
$exp->love();
