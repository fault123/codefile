<?php
highlight_file(__FILE__);
if($_SERVER["REMOTE_ADDR"]=="127.0.0.1"&&$_COOKIE['is_admin']==true){
    eval($_POST['wanna_flag']);
}
$ch = curl_init(); // ����һ����cURL��Դ
curl_setopt($ch, CURLOPT_URL, $_GET['url']); // ����URL����Ӧ��ѡ��
#curl_setopt($ch, CURLOPT_FOLLOWLOCATION, 1);
curl_setopt($ch, CURLOPT_HEADER, 0);
#curl_setopt($ch, CURLOPT_PROTOCOLS, CURLPROTO_HTTP | CURLPROTO_HTTPS);
curl_exec($ch); // ץȡURL���������ݸ������
curl_close($ch);
