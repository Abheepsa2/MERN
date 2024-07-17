let data=['sonakshi','dev','soha','elina'];
// console.log(data);
// data.push('ronit');
// console.log(data);  //last ma data add grxa 
// data.pop(); //last ko data remove grxa
// data.shift();   //first ko nikalne
// data.unshift('gita');  ///first ma data add garne 
// data.splice(0,3);//0 1 2 index ma bhako aagadi ko index katdiyo tyo agadi ko index 

// console.log(data);

// data.forEach(function(value,index){
// console.log(index,value)
// });
// let numbers=[10,20,30,40]
// let new_number=[]
// for(let i=0;i<numbers.length;i++){
//     new_number.push(numbers[i]*2);
// }
// console.log(new_number);


// let numbers=[10,20,30,40]
// // let new_data=numbers.forEach(function(value,index){
// //     return  value*2;
// // }); for eaxh le data type return gardina 
// let new_data=numbers.map(function(value,index){
//         return  value*2;
//     });
// console.log(new_data); ///map vane function le data type return garda rixa 
 

// ascending order
// let number=[1,5,4,3,2,6,7,8,9,10];
// number.sort(function(a,b){
//     console.log("a:",a,"b:",b);
//     console.log(number);
//     return a-b;
   
// });
// console.log(number);
let a=50;
b=80;
c=30;
if(a>b && a<c){
    if(b>c){
        console.log(a,b,c);
    }
    else{
        console.log(a,c,b);
    }
        
}else if(b>a && b<c){
    if(a>c){
        console.log(b,a,c);
    }
    else{
        console.log(b,c,a);
    }
        
}

    if(b<c){
        console.log(a,b,c);
    }
    else{
        console.log(a,c,b);
    }
        
console.log(a,b,c);
