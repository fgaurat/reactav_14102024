const arr = [10,20,30,40,50]

// arr = [58,9,98]
arr[0] = 10000
console.log(arr)
const [a,b,...c] = arr
console.log(a,b)
console.log(c)


const o = {"name":"GAURAT","firstName":"Fred","age":48,"job":"Dev"}

const {name,firstName,...lereste} = o
console.log(name,firstName)
console.log(lereste)

const arr2 = [10,20,30,40,50]
const arr3 = [...arr2 ,60,70,80]
console.log(arr3)
const o2 = {...o,"age":22}
console.log(o2)


