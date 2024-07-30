// class Students{
//     name="ram"
//     info(){
//         let obj=new Students()
// console.log("hellow"+this.name)
//     }
//     add(x,y){
//         return x+y
//     }
// }
// let obj=new Students()
// obj.info()
//  let addition=obj.add(6,7)
//  console.log(addition)

// class Calculator{
//     x=10
//     y=30
//     add(){
//         // return this.x+this.y
//         console.log(" function bhitra ko add ",this.x+this.y)
//         // console.log(" the adition ",x+y)
//         // return x+y
//     }
//     sub(){
//         return this.x-this.y
//         // console.log(" the substraction is  ",x+y)
//         // return x-y
//     }
//     mul(){
//       return this.x*this.y
//     }
// }
// let obj1=new Calculator()
// obj1.add()
// // console.log(obj1.add())
// console.log(" substraction  function bahira ",obj1.sub())
// obj1.mul()
// console.log(" multiplication ",obj1.mul())
// // console.log(" function bahira ko",obj1.sub())

class calculation{
    x=20
    y=40
    sum(){
        return this.x+this.y
    }
    sub(){
        console.log("the substraction",this.x-this.y)
    }

}
let obj=new calculation()
console.log("the sum is ",obj.sum())
obj.sub()

