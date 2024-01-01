<?php 
    highlight_file(__FILE__);
    error_reporting(0);
    if($_GET['a'] != $_GET['b'] && md5($_GET['a']) == md5($_GET['b'])){
        if((string)$_POST['c'] != (string)$_POST['d'] && sha1($_POST['c']) === sha1($_POST['d'])){
            if($_GET['e'] != 114514 && intval($_GET['e']) == 114514){
                if(isset($_GET['NS_CTF.go'])){
                    if(isset($_POST['cmd'])){
                        if(!preg_match('/[0-9a-zA-Z]/i', $_POST['cmd'])){
                            eval($_POST['cmd']);
                        }else{
                            die('error!!!!!!');
                        }
                    }else{
                        die('error!!!!!');
                    }
                }else{
                    die('error!!!!');
                }
            }else{
                die('error!!!');
            }
        }else{
            die('error!!');
        }
    }else{
        die('error!');
    }
?> error!!