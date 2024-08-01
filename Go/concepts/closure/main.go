package main

import "fmt"

func multiplyBy(multiplier int64) func(multiplicand int64) int64 {
	return func(multiplicand int64) int64 {
		product := multiplicand * multiplier
		return product
	}
}

func main() {
	multiplyBy2 := multiplyBy(2)
	multiplyBy4 := multiplyBy(4)

	result1 := multiplyBy2(2)
	result2 := multiplyBy2(4)
	result3 := multiplyBy4(4)
	result4 := multiplyBy4(2)

	fmt.Println(result1)
	// output: 4
	fmt.Println(result2)
	// output: 8
	fmt.Println(result3)
	// output: 16
	fmt.Println(result4)
	// output: 8
}
