// function add(x,y){
//     return x+y;
// }
// function total(a,b,callback){
//     console.log(callback(a,b))

// }
// total(5,6,add)


// setTimeout (function(){
//     alert("hhellow")
// },5000)
// setTimeout( function(){
//     alert("ellow")
// },2000)

// function bank(){
//     console.log('bank')
//     setTimeout ( function (){
//         console.log('banks')
//     },2000)
// }
// function user(){
//     console.log('user')
// }
// bank()
// user()

// let data= new Promise(function(resolve,reject){
// let task=true;
// if (task){
//     resolve('tack completed')
// }
// else{
//     reject('task incomplete')
// }
// })
// data.then(function(response){
//     console.log(response)
// }).catch(function(error){
//     console.log(error)
// })


// console.log(data)



// function bank(){
//     return new Promise(function(resolve,reject){
//         setTimeout(function(){
//             resolve('bank')
//         },2000)
//     })
// }
//  async function user(){
//     let b= await bank();
//     console.log(b);
//     console.log('user')
// }
// // bank()
// user();

// function bank(){
  
//       return  setTimeout(function(){
//      return "i am bank"
//         },2000)
 
// }
//  async function user(){
//     let b= await bank();
//     console.log(b);
//     console.log('user')
// }
// // bank()
// user();

// let users= fetch('https://jsonplaceholder.typicode.com/users')
// console.log(users)
fetch('https://jsonplaceholder.typicode.com/users').then((res)=>{
    return res.json()
}).then((user)=>{
    console.log(user)
}).catch((error)=>{
    console.log(error)
})