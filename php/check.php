<!-- <?php
//获取cookie
$cookie=$_COOKIE['user'];

//检查admin
if(isset($cookie)&&strpos($cookie,'admin')!==false){
    echo("welcome admin!");

    // 检查请求头中是否包含自定义的 User-Agent 头部
    if (isset($_SERVER['HTTP_USER_AGENT'])) {
    $userAgent = $_SERVER['HTTP_USER_AGENT'];

    // 检查 User-Agent 是否匹配特定的字符串
    if (strpos($userAgent, '127.0.0.1') !== false) {
        echo "Congratulations! You are login at 127.0.0.1";

    }
    else die("not from localhost");

} -->