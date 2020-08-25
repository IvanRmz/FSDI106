function init() {
    console.log("Admin page")
    fetchData();
    displayCatalog();
}
var catalog = [];
window.onload=init;

function fetchData(){
    // get data from server
    // use object literal
    catalog=[
        {
            code:"001",
            title:"Iphone 11",
            price:1000.00,
            category:"Phone",
            img:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone11-purple-select-2019?wid=834&hei=1000&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1566960958082"
        },
        {
            code:"002",
            title:"Samsung TV",
            price:2000.00,
            category:"Electronics",
            img:"https://images.samsung.com/is/image/samsung/in-uhdtv-nu7400-ua55nu7470uxxl-185768498?$PD_GALLERY_L_JPG$"
        },
        {
            code:"003",
            title:"Speakers",
            price:100.00,
            category:"Sound",
            img:"https://http2.mlstatic.com/audifonos-skullcandy-gi-dj-modelos-unicos-coleccionables-D_NQ_NP_340011-MLM20461578896_102015-F.jpg"
        }
    ]
}

function displayCatalog(){
    // travel the array of items with a for loop
    // get each item
    // display the item on the HTML
    catalog.forEach(item=>{

        var  syntax = `
        <div id = "${item.code}" class="card center">
            <img src="${item.img}" class="card-img-top center" alt="img">
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

        $(".catalog").append(syntax);

    });
}


/**
 * <div class = "item">
                <h2>${item.code}</h2>
                <h1>${item.title}</h1>
                <p><strong>Price:</strong>${item.price}</p>
                <p><strong>Category:</strong>${item.category}</p>
                <img src="${item.img} alt="Image">
            </div>
 * 
 */