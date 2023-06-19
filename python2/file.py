import os
import sys

file=sys.argv[1]
filepath=os.path.join('uploads',file)
if not os.path.exists(filepath) or os.path.isdir(filepath) or '..' in filepath or "flag" in filepath:
    print("Hacker!!!")
else:
    with open(filepath,'r') as f:
        content=f.read()
    print(content)