var shoppingCart = [
    
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
    
    while (i < shoppingCart.length)
    {
        var listItem = document.createElement("section");
        listItem.classList.add("row");
        
        var id = document.createElement("div");
        id.classList.add("col-sm");
        id.innerText =  shoppingCart[i].id;

        var name = document.createElement("div");
        name.classList.add("col-sm");
        name.innerText =  shoppingCart[i].name;
        
        var currentScore = shoppingCart[i].score;

        var score = document.createElement("div");
        score.classList.add("col-sm");
        score.innerText =  shoppingCart[i].score;

        var passingScore = document.getElementById("passingScoreInput").value;
        if (currentScore <= passingScore)
        {
            score.classList.add("lowScore");
        }
        console.log shoppingCart[i]);

        dataList.appendChild(listItem);

        listItem.appendChild(id);
        listItem.appendChild(name);
        listItem.appendChild(score);

        i = i + 1; // Alternatively, use i++;

        // Other ways:
        // i += 2;
        // i += 3;
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

function addNewStudent()
{
    var scoreInput = document.getElementById("scoreInput").value;    
    var nameInput = document.getElementById("nameInput").value;
    var idInput = document.getElementById("idInput").value;

 shoppingCart.push({
        id: idInput,
        name: nameInput,
        score: parseFloat(scoreInput)
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
    
    while (i < shoppingCart.length)
    {
        var listItem = document.createElement("li");
        
        console.log shoppingCart[i]);
        listItem.innerText = shoppingCart[i].name;

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