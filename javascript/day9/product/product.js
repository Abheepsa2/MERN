let product = [
    { id: 1, name: 'headphones', brand: 'jbl', price: 700 },
    { id: 2, name: 'mouse', brand: 'dell', price: 400 },
    { id: 3, name: 'speaker', brand: 'jbl', price: 200 },
    { id: 4, name: 'mobile', brand: 'honor', price: 8000 },

]
function bill() {
    let details = "";
    console.log("product.information");
    product.forEach(function (product, index) {
        details += `
<tr>
<td>${++index}</td>
<td>${product.name}</td>
<td>${product.brand}</td>
<td>${product.price}</td>
<td> <button>edit</button></td>
<td><button onclick="deleteRecord(${product.id})">delete</button></td>
</tr>
    `;

    });
    document.getElementById('detail').innerHTML = details;
}
bill();

let productId=5;
function addRecord(e){
    e.preventDefault();
let name=document.getElementById('name').value;
let brand=document.getElementById('brand').value;
let price=document.getElementById('price').value;
let insertData={id:productId++,name:name,brand:brand,price:price};
console.log(insertData);
product.push(insertData);
bill();
document.getElementById('name').value="";
document.getElementById('brand').value="";
document.getElementById('price').value="";

}
function deleteRecord(id){
let index=product.findIndex(function(product){
return product.id=id;

});
product.splice(index,1);
bill();
}