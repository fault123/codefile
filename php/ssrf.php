<?php
if($_SERVER["REMOTE_ADDR"] == "127.0.0.1"){
    $usr = $_POST['username'];
    $passwd = $_GET['passwd'];
    if(is_numeric($passwd) && '12345??/123456??6'==intval($passwd) && 'admin??admin??'===$usr)echo $flag; //default:
}