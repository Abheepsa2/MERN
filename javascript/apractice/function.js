// function func(){
//     console.log("welcome");
// }
// func();

// function funcc(msg,n){

//     //parameter bhaneko input 
//     console.log(msg*n);
// }
// funcc("i am learning javascript",100);
// //argument

// function sum(a,b){
//     console.log("th sum is ",a+b);
// }
// sum(1,2);

// function sum(a,b){
//     //local variable  yai function bhitra matra chalxa 
//     console.log(a);
//     sum=a+b;
//     return sum;
// }
// let value=sum(1,2);
// console.log(value);
// console.log(a);


function sum(a,b){
    return a+b;
}
var arrowSum= (a,b)=>{
console.log(a+b); 
};

//arrow function 
function mul(c,d){
    return c+d;
}
var mul=(c,d)=>{
    console.log(c*d);
};