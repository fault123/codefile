<!-- <?php
//��ȡcookie
$cookie=$_COOKIE['user'];

//���admin
if(isset($cookie)&&strpos($cookie,'admin')!==false){
    echo("welcome admin!");

    // �������ͷ���Ƿ�����Զ���� User-Agent ͷ��
    if (isset($_SERVER['HTTP_USER_AGENT'])) {
    $userAgent = $_SERVER['HTTP_USER_AGENT'];

    // ��� User-Agent �Ƿ�ƥ���ض����ַ���
    if (strpos($userAgent, '127.0.0.1') !== false) {
        echo "Congratulations! You are login at 127.0.0.1";

    }
    else die("not from localhost");

} -->