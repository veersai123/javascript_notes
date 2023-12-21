// const p= new Promise((resolve,reject)=>{
//      resolve("hello")
// })
// console.log(p)

// const p= new Promise((resolve,reject)=>{
//   reject("aapka code shi nahi h")
// })
// console.log(p)


// const p= new Promise((resolve,reject)=>{
//   resolve("promise fullfill ho gya")
//   // reject("promise reject ho gya")
// })
// console.log(p)
// p.then((data)=>{
//   console.log(data)
// }).catch((data)=>{
//   console.log(data)
// })
// setTimeout(()=>{
//   console.log("hello guys ")
// },2000)

// const a=document.getElementById("xyz")
// const b=document.getElementById("abc")
// const p=new Promise((resolve,reject)=>{
//    a.addEventListener('click',()=>{
//     resolve("promise fullfill ho gya")
//    })
//    b.addEventListener('click',()=>{
//     reject("promise reject ho gya")
//    })
// })
// console.log(p)
// p.then((data)=>{
// console.log(data)
// return 101
// }).then((data)=>{
//   console.log(data)
// }).catch((data)=>{
//   console.log(data)
// })

setTimeout(()=>{
  console.log("main setTimeout se hu")
})
const p=new Promise((resolve,reject)=>{
  resolve("main promise se resolve hoker aaya hu")
})
// console.log(p)
console.log("main to normal js se hu")
p.then((data)=>{
console.log(data)
}).catch((data)=>{
  console.log(data)
})
