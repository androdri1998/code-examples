package main

import "fmt"

func main() {
	shoes := make(map[int]bool)

	shoes[32] = false
	shoes[34] = true
	shoes[36] = false
	shoes[38] = true
	shoes[40] = false
	shoes[42] = true

	fmt.Println("40", shoes[40])
	// 40 false
	fmt.Println("42", shoes[42])
	// 42 true
	fmt.Println("41", shoes[41])
	// 41 false
}
