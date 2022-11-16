function myFunction(num) {
    return num-1 
}

let num = 10
let add = 3
add = myFunction(add) 
add = myFunction(add)

console.log(`add should be 1: ${add} | num is not being used.`)