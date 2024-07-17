
// let x = 1;
// while (x <= 10) {
//     console.log(x);
//     x++;
// }

// let a=1;
// for(;a<10;){
// console.log(a);
// a++;
// }


// let x1 = 1;
// do {
//     console.log(x);
//     x++;
// } while (x <= 10);

//for in
//for of 

// let n1='ram';
// let n2='shyam';
// let n3='hari';
// //array
// let names=['ram','shyam','hari','gita','sita'];
// console.log(names);
// console.log(names[i]);

// // for(let i=0;i<names.length;i++){
// // console.log(names[i]);
// // }
// for(let i in names){
// console.log(names[i]);  
// }
// for(let i in names){
//     console.log(i);  
//     }

// let a=1;
// for(;a<10;){
//     console.log(a);
//     a++;
// }
// console.log(a);


    //in grda index dinxa 
    // of grda tai value dida rixa
// // for(let i of names){
// // console.log(names[i]);  
// // }


// //whai sia array?
// //collection of data of same type or diifrent type

// // types of array
// //1. single dimenstion array
// //2. multi dimensional array

// // declare array types
// //1. constructor way
// //2. literal way

// // constructor way
// // let name1 = new Array ('ram','shyam','hari','gita','sita');

// //literal way
// // let name2=['ram','shyam','hari','gita','sita'];
// // console.log(names[2]);
// //array index start from 0

// let data=[
//     ['ram','shyam','hari'],
//     ['gita','sita','rita'],
//     // ['nabin','sabin','abin']
//     // ['laxmi',[[['sophia']]]]
    
// ]



// for(let i=0;i<data.length;i++){
//     console.log(data[i]);
//     break;  
// }
// console.log(data)
// //2*3 
// console.log(data [0][1])

// for(let x=0;x<data.length;x++){
//     console.log(data[x])
//     for(let y=0;y<data.length;y++){
//     console.log(data[x][y]);
//     break;
// }
// }


// // console.log(data)
// // //2*3
// // console.log(data[0][0])

// //object :collection of key value pair
// //let user =['ram',20,'ktm','ram@gmail.com']


// let user={
//     names:'ram',
//     age:20,
//     adress:'ktm',
//     email:'ram@gmail.com'

// }
// console.log(user['names']);
// console.log(user['age']);
// console.log(user.adress);
// console.log(user.email);
// // // console.log (user['name']);

let course=[
{id:1,name:"javascript",price:100,author:'ram'},
{id:2,name:"php",price:200,author:'shyam'},
{id:3,name:"python",price:3000,author:'hari'},
{id:4,name:"php",price:100,author:'gita'},
]
// console.log(course[2].name)

let outPut="";
for(let i=0;i<course.length;i++){
    outPut+=  
    `<div class='books'>
    <h1> Title :${course[i].name}</h1>
    <h1>  Price : ${course[i].price}</h1>
    <h1> Author : ${course[i].author}</h1>
    </div>
    `
}
console.log(outPut)
document.getElementById('container').innerHTML=outPut;