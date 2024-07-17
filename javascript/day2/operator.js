// console.log("hellow")
//operators
//1.Arithmetic operators +,-,/,%,++,--
// let x=10
// let y=20
// console.log(x+y)
// console.log(x-y)
// console.log(x*y)
// console.log(x/y)


// console.log(x%y)
// //remainder 
// console.log(y%x)
//exact divisible bhayo

// console.log(x++)
// console.log(x--)

//2 asignment oprators = ,+=  ,  -=  , *=,/= ,%=
// let x=10;
// x*=20;
// console.log(x)
//  3 comparision operator ==, ===,!=,!==,> ,<
// console.log(10==10)  // data ko type value matr check garne
// console.log(10==='10')  //data type check garne  number ra string chaeck gary
// console.log(20==!20)

// 4 logical operator  && , || ,!
// && bhayo vne dubi kura thakki miln Paryo
// || kuni euta same huna paryp 
//! ulto huna paryo
// console.log(10==10 && 20==20)
// console.log(10==10 || 30==20)
// console.log(!true)

// 5 bitwise operators 
// console.log(5&6)
// 5-101
//6-110
//100


// data types 
// 1 .Number :10,10.6
// 2 .String :'hellow'."hellow"
// 3 .Boolean: true false
// 4 .Undefined 
// 5 .Null
// 6 .Object :{key :value}
// 7 .Array [10,20,30]
// 8 .symbol

// let x='10.6';
// console.log(typeof(x))
// let laptop ={
//     brand:'dell',
//     ram:'8gb',
//     processor:'i5'
// }
// console.log(laptop.brand)
// object
// console.log(typeof(laptop))
// console.log(laptop.brand)

// let users={
//     name:"ram",
//     address:{
//         city:'ktm',
//         country:'nepal'
//     }
// }

// console.log(users.address.country)
// let lap ={
//    " brand":"'dell'",  
// }

// json

// array
// let arr=Array(10,20,30,40,50)
// let arr1=[10,20,40]
// console.log(arr)
// console.log(arr1)
// let ar=Array('10','20',30,40,50)
// console.log(ar[1])

// let arr=['ram',2002,'anika']
// console.log(arr[2])

// document.write("hellow")
// document.querySelector('h1').style.color='red'
// document.querySelector('h1').innerHtml='hellow'

// let h1=document.querySelector('h1')
// console.log(h1)

// let h2=document.querySelectorAll('h2')
// console.log(h2)

// let data= document.getElementById('box')
// console.log(data)

// let data= document.getElementsByClassName('box1')
// console.log(data)

// let data= document.getElementsByTagName('p')
// console.log(data)

// let data= document.getElementsByName('text')
// console.log(data)

let users=["ram","sita","gita"]
let outPut = "<ul>"
for(let i=0; i<users.length;i++){
    outPut+="<li>" + users[i]+"</li>"
}
outPut+= " </ul>"
document.getElementById('result').innerHTML=outPut



let username='admin';
let password='password';
// if(username=='admin'&& password=='password'){
//     //  alert("valid user")
//     //  } else{
//     //     alert("invalid user")
//     //  }  
//     // }

//  document.getElementById('result').innerHTML=output
//  document.querySelector('#login').addEventListener("click",function(){
//  let email=document.getElementById('email').value;
//  let password=document.getElementById('password').value;
//  if(username=='admin'&& password=='password'){
//  alert("valid user")
//  } else{
//     alert("invalid user")
//  }  
// }
//);


