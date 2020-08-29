function init() {
    console.log("Admin page")
    fetchData();
    displayCategories();
    displayCatalog();

    $("#btn-search").click(function(){
        var text =$("#txt-search").val();
        search(text);
    });

}
var catalog = [];
var categories = [];
window.onload=init;

function fetchData(){
    $.ajax({
        url: "http://restclass.azurewebsites.net/api/points",
        type: "GET",
        success:function(allItems){
            console.log(allItems);
            allItems.forEach(item=>{
                if(item.user === "Ivan"){
                    catalog.push(item);
                    categories.push(item.category)
                }
            })
            displayCategories();
            displayCatalog();
        },
        error:function(details){
            console.log("Eroor getting data ", details);
        }
    });
}

function displayCategories(){
    //travel the categories array
    // get each category from the array
    // create the syntax for li
    // append the syntax to the #categories
    (new Set(categories)).forEach(category=>{
        var syntax = `
            <li class="list-group-item"><a id="${category}" href="#" class="list-group-item-action">${category}</a></li>
        `;
        $("#categories").append(syntax);
        $(`#${category}`).click(function(){
            search(category);
        });
    });
}

function displayCatalog(){
    // travel the array of items with a for loop
    // get each item
    // display the item on the HTML
    catalog.forEach(item=>{
        drawItem(item);
    });
}

function drawItem(item){
    var  syntax = `
    <div id = "${item.code}" class="card center">
        <img src="${item.image}" class="card-img-top center" alt="img">
        <div class="card-body">
            <h5 class="card-title">${item.title}</h5>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item itemPrice">$ ${item.price}</li>
            <li class="list-group-item"><strong>Category:</strong> ${item.category}</li>
        </ul>
        <div class="card-body center">
            <button type="button" class="btn btn-primary">Add to Cart</button>
        </div>
    </div>
        
    `;

    $("#catalog").append(syntax);
}

function search(text){
    console.log(text);
    // clear the previus results
    // travel the array
    // get each item
    // if the item title contains the text
    // display the item

    $("#catalog").html("");
    catalog.forEach(item=>{
        if(
            item.title.toLowerCase().includes(text.toLowerCase()) 
            || item.category.toLowerCase().includes(text.toLowerCase()) 
            || item.code.toLowerCase().includes(text.toLowerCase()) 
        ){
            drawItem(item);
        }
    });

}