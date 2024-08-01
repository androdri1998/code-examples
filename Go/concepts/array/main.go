package main

import "fmt"

func searchShoeNumberFor(shoeNumber int64, shoes [10]int64) bool {
	index := 0
	found := false
	for ; index < len(shoes); index++ {
		currentShoeNumber := shoes[index]

		fmt.Printf("Running for position %v value %v\n", index, currentShoeNumber)
		if shoeNumber == currentShoeNumber {
			found = true
			break
		}
	}

	return found
}

func main() {
	var shoes [10]int64

	shoes[0] = 32
	shoes[1] = 40
	shoes[2] = 42

	found := searchShoeNumberFor(40, shoes)
	fmt.Println("found shoes 40: ", found)
	// Running for position 0 value 32
	// Running for position 1 value 40
	// found shoes 40:  true
	found = searchShoeNumberFor(42, shoes)
	fmt.Println("found shoes 42: ", found)
	// Running for position 0 value 32
	// Running for position 1 value 40
	// Running for position 2 value 42
	// found shoes 42:  true
	found = searchShoeNumberFor(41, shoes)
	fmt.Println("found shoes 41: ", found)
	// Running for position 0 value 32
	// Running for position 1 value 40
	// Running for position 2 value 42
	// Running for position 3 value 0
	// Running for position 4 value 0
	// Running for position 5 value 0
	// Running for position 6 value 0
	// Running for position 7 value 0
	// Running for position 8 value 0
	// Running for position 9 value 0
	// found shoes 41:  false
}
