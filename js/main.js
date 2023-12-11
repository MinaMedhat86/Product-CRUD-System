// Start CRUD System Input Data


var productName = document.getElementById("productName");
var productSalary = document.getElementById("productSalary");
var productCategory = document.getElementById("productCategory");
var productDesc = document.getElementById("productDesc");


var searchWord =  document.getElementById("searchWord");

var indexUpdate;
var mood = "create";

var productArr = [];


if(localStorage.getItem("productStorage")!= null){
    productArr = JSON.parse(localStorage.getItem("productStorage"));
    productTable (productArr)
}


function addProduct(){

    if (validationName()==true && validationSalary()==true  && validationCategory()==true ){

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
}

// Add Product In Table
function productTable (productArr , searchItem ){
    var cartona = "";
    for(i=0 ; i<productArr.length ; i++){
        cartona +=`        <tr>
        <td>${i+1}</td>
        <td>${searchItem? productArr[i].name.replace(searchItem , `<span class="text-danger fw-bolder">${searchItem}</span>`):productArr[i].name}</td>
        <td>${productArr[i].salary}</td>
        <td>${productArr[i].category}</td>
        <td>${productArr[i].description}</td>
        <td><button onclick="updateForm(${i})" class="btn btn-warning btn-sm">Update</button></td>
        <td><button onclick="deleteProduct(${i})" class="btn btn-danger btn-sm">Delete</button></td>
    </tr> `
    
    }
    document.getElementById("tableBody").innerHTML = cartona;   
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
    searchItem = searchWord.value;
    for(i=0 ; i<productArr.length ; i++){

        if(productArr[i].name.toLowerCase().includes(searchItem.toLowerCase()) == true)
        {
            searchArr.push(productArr[i]);
        }
    }

productTable(searchArr , searchItem );
    
}



                // -------------  Validation ------------ 

// Name
function validationName(){
    var regexMessegeName = document.getElementById("regexMessegeName");
    var regexName = /^[A-Z][a-z]{2,8}$/

    if (regexName.test(productName.value) == true){
        productName.classList.add("is-valid");
        productName.classList.remove("is-invalid");
        regexMessegeName.classList.replace("d-block" , "d-none" );

        return true;

    } else{
        productName.classList.add("is-invalid");
        productName.classList.remove("is-valid");
        regexMessegeName.classList.replace("d-none" , "d-block");

        return false;
    }
}

// Salary
function validationSalary(){
    var regexMessegeSalary = document.getElementById("regexMessegeSalary");
    var regexSalary = /^[1-9][0-9]{2,8}$/

    if (regexSalary.test(productSalary.value) == true){
        productSalary.classList.add("is-valid");
        productSalary.classList.remove("is-invalid");
        regexMessegeSalary.classList.replace("d-block" , "d-none" );

        return true;

    } else{
        productSalary.classList.add("is-invalid");
        productSalary.classList.remove("is-valid");
        regexMessegeSalary.classList.replace("d-none" , "d-block");

        return false;
    }
}


// Category
function validationCategory(){
    var regexMessegeCategory = document.getElementById("regexMessegeCategory");
    var regexCategory = /^(Mobile|Tv|ElectricProduct|else)$/

    if (regexCategory.test(productCategory.value) == true){
        productCategory.classList.add("is-valid");
        productCategory.classList.remove("is-invalid");
        regexMessegeCategory.classList.replace("d-block" , "d-none" );

        return true;

    } else{
        productCategory.classList.add("is-invalid");
        productCategory.classList.remove("is-valid");
        regexMessegeCategory.classList.replace("d-none" , "d-block");

        return false;
    }
}


// End CRUD System Input Data

































