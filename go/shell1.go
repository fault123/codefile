package main

import (
	"fmt"
	"os"
	"os/exec"
)
func main() {
	in := bytes.NewBuffer(nil)
	cmd := exec.Command("ls")
	// cmd.Stdin = in
	// in.WriteString("")
	// in.WriteString("exit\n")
	if err := cmd.Run();
		err != nil{
		fmt.Println("ERROR--> fail to write something to file, msg:"+err.Error())
		return
	}else{
		fmt.Println("SUCCESS--> the file is written something")
	}
}
