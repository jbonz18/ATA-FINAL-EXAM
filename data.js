var shopping_cart = [

 ];

function calculateAverage(){

    var average = 0;
    shoppingCart.forEach(produtc => {
        average = average + product.price;
    });
    average = average / shoppingCart.length;

    return average;
}

function loadDataGrid() {

    var jsonData = document.getElementById("jsonData");
    jsonData.innerText = JSON.stringify shoppingCart, undefined, 2);

    var i = 0;
    let dataList = document.getElementById("dataList");
    
    while (i < shopping_cart.length)
    {
        var listItem = document.createElement("section");
        listItem.classList.add("row");
        
        var id = document.createElement("div");
        id.classList.add("col-sm");
        id.innerText =  shopping_cart[i].id;

        var product = document.createElement("div");
        product.classList.add("col-sm");
        product.innerText =  shopping_cart[i].product;
        
        var currentPrice = shopping_cart[i].price;

        var price = document.createElement("div");
        price.classList.add("col-sm");
        price.innerText =  shopping_cart[i].price;

        var currentPrice = shopping_cart[i].price;
        if (currentPrice < document.getElementById("priceInput").value)
        {
            price.classList.add("lowPrice");
        }

        console.log(shopping_cart[i]);

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
        jsonData.innerHTML +=("<pre class='alert alert-secondary'>"); // 1) Bootstrap class
        jsonData.innerHTML +=(JSON.stringify(shopping_cart, undefined, 2));
        jsonData.innerHTML += ("</pre>");
        jsonData.innerHTML +=("<br/>");
        //var names = [];      
    }
}

function displayAverage()
{
    var resultSection = document.getElementById("resultSection");
    var paragraph = document.createElement("p");
    paragraph.classList.add("badge"); // 2) Bootstrap classes
    paragraph.classList.add("badge-info");

    paragraph.innerText = "Average: " + calculateAverage();

    resultSection.appendChild(paragraph);
}

function refreshScores(){
    let dataList = document.getElementById("dataList");

    while (dataList.childElementCount > 1){
        dataList.removeChild(dataList.lastChild);
    }
    loadDataGrid();
}

function addNewProduct()
{
    var priceInput = document.getElementById("priceInput").value;    
    var productInput = document.getElementById("productInput").value;
    var idInput = document.getElementById("idInput").value;

    shopping_cart.push({
        id: idInput,
        product: productInput,
        price: parseFloat(priceInput)
    });

    refreshScores();
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
    
    while (i < shopping_cart.length)
    {
        var listItem = document.createElement("li");
        
        console.log(shopping_cart[i]);
        listItem.innerText = shopping_cart[i].name;

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