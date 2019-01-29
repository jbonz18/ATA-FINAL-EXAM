var shoppingCart = [

 ];

function calculateTotal(){

    var total = 0;
    shoppingCart.forEach(produtc => {
        total = total + product.price;
    });
    total = total / shoppingCart.length;

    return total;
}

function loadDataGrid() {

    var i = 0;
    let dataList = document.getElementById("dataList");
    
    while (i < shoppingCart.length)
    {
        var listItem = document.createElement("section");
        listItem.classList.add("row");
        
        var id = document.createElement("div");
        id.classList.add("col-sm");
        id.innerText =  shoppingCart[i].id;

        var product = document.createElement("div");
        product.classList.add("col-sm");
        product.innerText =  shoppingCart[i].product;
        
        var price = document.createElement("div");
        price.classList.add("col-sm");
        price.innerText =  shoppingCart[i].price;
        
        var currentPrice = shoppingCart[i].price;
        if (currentPrice < document.getElementById("priceInput").value)
        {
            price.classList.add("lowPrice");
        }

        console.log(shoppingCart[i]);

        dataList.appendChild(listItem);

        listItem.appendChild(id);
        listItem.appendChild(product);
        listItem.appendChild(price);

        i = i + 1; // Alternatively, use i++;

        // Other ways:
        // i += 2;
        // i += 3;

        var jsonData = document.getElementById("jsonData");
        jsonData.innerHTML = ("<h3>JSON</h3>");
        jsonData.innerHTML +=("<pre class='alert alert-secondary'>"); 
        jsonData.innerHTML +=(JSON.stringify(shoppingCart, undefined, 2));
        jsonData.innerHTML += ("</pre>");
        jsonData.innerHTML +=("<br/>");
        //var names = [];     
    
    }
}

function displayTotal()
{
    var resultSection = document.getElementById("resultSection");
    var paragraph = document.createElement("p");
    paragraph.classList.add("badge"); // 2) Bootstrap classes
    paragraph.classList.add("badge-info");

    paragraph.innerText = "Total: " + calculateTotal();

    resultSection.appendChild(paragraph);
}

function refreshCart(){
    let dataList = document.getElementById("dataList");

    while (dataList.childElementCount > 1){
        dataList.removeChild(dataList.lastChild);
    }
    loadDataGrid();
}

function addNewProduct() {
    var priceInput = document.getElementById("priceInput").value;    
    var productInput = document.getElementById("productInput").value;
    var idInput = document.getElementById("idInput").value;

    shoppingCart.push({
        id: idInput,
        product: productInput,
        price: parseFloat(priceInput)
    });

 refreshCart();
}


function myReplacer(name, val) {
    if (typeof val === 'string') {
        return val.toString().toUpperCase();  
     } else {
        return val; // return as is
    }
};

// Old-way of loading data (ol). No longer used
function loadData(){

    var i = 0;
    let dataList = document.getElementById("dataList");
    
    while (i < shoppingCart.length)
    {
        var listItem = document.createElement("li");
        
        console.log(shoppingCart[i]);
        listItem.innerText = shoppingCart[i].product;

        dataList.appendChild(listItem);
        i = i + 1; // Alternatively, use i++;

        // Other ways:
        // i += 2;
        // i += 3;
    }
}

function fetchData() {
    var request = new XMLHttpRequest();
    request.open('GET', '/api/products', true);
    
    request.onload = function() {
      if (request.status !== 200) {
        body.innerHTML = 'An error occurred during your request: ' +  request.status + ' ' + request.statusText;
        return;
      }
      renderTable(JSON.parse(request.responseText));
    };
    request.onerror = function() {
        body.innerHTML = 'An error occurred during your request: ' +  request.status + ' ' + request.statusText;
    };
    request.send();
}