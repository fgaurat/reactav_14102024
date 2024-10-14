
const getTodo = (id) => {
    const p = new Promise((resolve, reject) => {

        setTimeout(() => {
            const todo = {
                id,
                title: `Todo id :${id}`,
                completed: false
            }
            resolve(todo)
        }, 1000)

    });

    return p
}







// getTodo(1).then((todo) => {
//     console.log(todo)
//     return getTodo(todo.id + 1)
// }).then((todo) => {
//     console.log(todo)
//     return getTodo(todo.id + 1)
// }).then((todo)=>{
//     console.log(todo)
//     return getTodo(todo.id+1)
// })


// const main = async () => {
//     const todo1 =  await getTodo(1)
//     console.log(todo1)
//     const todo2 =  await getTodo(2)
//     console.log(todo2)
//     const todo3 =  await getTodo(3)
//     console.log(todo3)

// }
// main()


const todo1 =  getTodo(1)
const todo2 =  getTodo(2)
const todo3 =  getTodo(3)

all = [todo1,todo2,todo3]

Promise.all(all).then( (arr)=>{
    console.log(arr)
})
