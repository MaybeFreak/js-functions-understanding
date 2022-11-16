function myFunction(num) {
    return num-1
}

let num = 10
num = myFunction(num)
num = myFunction(num)

console.log(`num should be 8: ${num}`)
