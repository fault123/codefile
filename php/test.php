<?php
$array=get_defined_functions();//�����������ö��庯��
foreach($array['internal'] as $arr){
    if ( preg_match('/[\x00- 0-9\'"\`$&.,|[{_defgops\x7F]+/i', $arr) ) continue;
    if ( strlen(count_chars(strtolower($arr), 0x3)) > 0xd ) continue;
    print($arr.'<br/>');
}
