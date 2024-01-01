<?php
mt_srand(1775196155);
//��Կ
function public_key($length = 16) {
    $strings1 = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    $public_key = '';
    for ( $i = 0; $i < $length; $i++ )
    $public_key .= substr($strings1, mt_rand(0, strlen($strings1) - 1), 1);
    return $public_key;
}
//˽Կ
function private_key($length = 12) {
	
	$strings2 = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
	$private_key = '';
	for ( $i = 0; $i < $length; $i++ )
	$private_key .= substr($strings2, mt_rand(0, strlen($strings2) - 1), 1);
	return $private_key;
}
echo public_key();
echo private_key();
?>