// Start CRUD System Input Data


var productName = document.getElementById("productName");
var productSalary = document.getElementById("productSalary");
var productCategory = document.getElementById("productCategory");
var productDesc = document.getElementById("productDesc");
var addBtn = document.getElementById("addBtn");
var updateBtn = document.getElementById("updateBtn");
var indexUpdate;
var mood = "create";

var productArr = [];


if(localStorage.getItem("productStorage")!= null){
    productArr = JSON.parse(localStorage.getItem("productStorage"));
    productTable (productArr)
}


function addProduct(){
        var product = {
            name : productName.value,
            salary : productSalary.value, 
            category : productCategory.value,
            description : productDesc.value,
        }

        if (mood == "create"){

            productArr.push(product);

        } else if (mood == "update"){

            productArr [indexUpdate] = product;
            mood = "create";
            myBtn.innerHTML = "Add Product";
            myBtn.classList.replace( "btn-warning" , "btn-success");
        }
        
        localStorage.setItem("productStorage", JSON.stringify(productArr));
        productTable(productArr);

}


// Add Product In Table
function productTable (productArr){
    var cartona = "";
    for(i=0 ; i<productArr.length ; i++){
        cartona +=`        <tr>
        <td>${i+1}</td>
        <td>${productArr[i].name}</td>
        <td>${productArr[i].salary}</td>
        <td>${productArr[i].category}</td>
        <td>${productArr[i].description}</td>
        <td><button onclick="updateForm(${i})" class="btn btn-warning btn-sm">Update</button></td>
        <td><button onclick="deleteProduct(${i})" class="btn btn-danger btn-sm">Delete</button></td>
    </tr> `
    document.getElementById("tableBody").innerHTML = cartona;
    }
        
    clearForm();
}


// Clear Form
function clearForm (){
    productName.value = "";
    productSalary.value = "";
    productCategory.value = "";
    productDesc.value = "";
}

// Delete Product
function deleteProduct(indexProduct){
    productArr.splice(indexProduct ,1);
    localStorage.setItem("productStorage", JSON.stringify(productArr));
    productTable(productArr);
    
}


// Update Product
function updateForm(indexProduct){
    myBtn.classList.replace( "btn-success" , "btn-warning" ) ;
    myBtn.innerHTML = "Update Product" ;

    productName.value = productArr[indexProduct].name ;
    productSalary.value = productArr[indexProduct].salary ;
    productCategory.value = productArr[indexProduct].category ;
    productDesc.value = productArr[indexProduct].description ;

    mood = "update";

    indexUpdate = indexProduct;

}


// Search Product


function searchProduct (searchItem){
    var searchArr = [];

    for(i=0 ; i<productArr.length ; i++){

        if(productArr[i].name.toLowerCase().includes(searchItem.toLowerCase()) == true)
        {
            searchArr.push(productArr[i]);
        }
    }

productTable(searchArr);
    
}

// End CRUD System Input Data


