let student=[
    {id:1,names:'dev',age:'20',address:'maitidevi'},
    {id:2,names:'sona',age:'22',address:'ason'},
    {id:3,names:'soha',age:'20',address:'teku'},
]

function show(){
 console.log("student.information");
let outPut = "";
student.forEach(function(student,index){
    outPut+=`
    <tr>
        <td>${++index}</td>
        <td>${student.names}</td>
        <td>${student.address}</td>
        <td>${student.age}</td>
     
        <td > <button onclick="updateRecord(${student.id})"> edit</button></td>
    <td><button onclick="deleteRecord(${student.id})"> delete</button></td>
         
             
    </tr>
    `;
    document.getElementById('result').innerHTML=outPut;
});
}
show();

let studentId=4;
 function addRecord(e){
    e.preventDefault();
    let criteria=document.getElementById('criteria').value;
    if(criteria){
        let index = student.find(function(student){
            return student.id==id;
               });
    }

    let namee=document.getElementById('name').value;
    let ages=document.getElementById('age').value;
    let addresses=document.getElementById('address').value;
// console.log(name,age,address);
let insertData={id:studentId++,name:namee,age:ages,address:addresses};
console.log(insertData);
student.push(insertData);
show();
document.getElementById('name').value='';
document.getElementById('age').value='';
document.getElementById('address').value='';
 }
 function deleteRecord(id){
    // console.log(id);
    let index=student.findIndex(function(student){
        return student.id==id;
    });
    console.log(index);
    student.splice(index,1);
    show();

 }
 function updateRecord(id){
    let index = student.find(function(student){
 return student.id==id;
    });
    console.log(index);
    document.getElementById('name').value=index.names;
    document.getElementById('age').value=index.age;
    document.getElementById('address').value=index.address;
    document.getElementById('criteria').value=index.id;
    document.getElementById('btn_name').innerHTML="Update";
 }