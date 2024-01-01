<?php
highlight_file(__FILE__);
class Test{
    public $func;
    public $para;
    public $copy;

    private function On1y0ne(){
        $uploaddir="./uploads/tmp_".md5($_SERVER['REMOTE_ADDR']);
        if(file_exists($uploaddir))system("rm -rf /var/www/html/uploads/*");
        mkdir($uploaddir);
        if(!empty($_FILES["uploadfile"])){
            $tmp_name=$_FILES["uploadfile"]["tmp_name"];
            $name=$_FILES["uploadfile"]["name"];
            $mime=$_FILES["uploadfile"]["type"];
            $ext=substr($name,strrpos($name,".")+1);
            if(preg_match("/ph/i",$ext)||($mime!=="image/jpg"&&$mime!=="image/png"&&$mime!=="image/jpeg"&&$mime!=="image/gif")||!exif_imagetype($tmp_name))die("Hacker!!!");
            $path=$uploaddir."/".basename($name);
            move_uploaded_file($tmp_name,$path);
            echo $path;
        }
        echo("yeah!!!!");
    }

    public function __destruct(){
        $this->func="phpinfo";
        if(!preg_match("/[\s\S]*/",$this->para))$this->copy=$this->para;
        var_dump($this->func);
        @call_user_func($this->func);
    }
}
unserialize($_COOKIE['a']);

throw new Exception("就这");
