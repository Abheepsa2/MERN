let buttn=document.querySelector("#btn1");
let buttn2=document.getElementById("btn1");

// buttn.onclick= () =>{
// console.log("button was clicked");
// }
// buttn2.onclick=()=>{
//     console.log("button was clicked");
//     let a=25;
//     console.log(a+5);
// }

// let box=document.getElementById("boxx");
// box.onmouseover=()=>{
//     console.log("the mouse over");
// }

buttn.onclick= (evt) =>{
console.log(" the event",evt);
console.log (" the event type ",evt.type);
console.log (" the event target ",evt.target);
console.log (" the event type ",evt.clientX ,evt.clientY);
};