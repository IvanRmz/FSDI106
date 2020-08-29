
/**
 * http://restclass.azurewebsites.net/api/points
 */

 class Item {
     constructor(code, title, price, category, image) {
        this.code = code;
        this.title = title;
        this.price = price;
        this.category = category;
        this.image = image;
        this.user = "Ivan"
     }
 }
function init() {
    console.log("catalog page")

    if(typeof emptyArray === "undefined" || emptyArray == null  || emptyArray.length == 0){
        fetchData();
    }

    $("#btn-register").on("click",register);
}

window.onload=init;

function clearForm() {
    $("#code").val("");
    $("#title").val("");
    $("#price").val("");
    $("#category").val("");
    $("#image").val("");
}

function register() {
    var code = $("#code").val();
    var title = $("#title").val();
    var price = $("#price").val();
    var category = $("#category").val();
    var image = $("#image").val();

    if(code === ""){
        alert("Code it is empty, insert a code")
        return;
    }
    
    if(title === ""){
        alert("Title it is empty, insert a title")
        return;
    }
    
    if(price === ""){
        alert("Price it is empty, insert the price")
        return;
    }
    
    if(category === ""){
        alert("Category it is empty, insert a category")
        return;
    }
    
    if(image === ""){
        alert("Image it is empty, insert a image url")
        return;
    }

    var item = new Item(code,title,price, category, image)
    console.log(item);
    // console.log(`code: ${code}, title: ${title}, price: $${price}, category: ${category}, image: ${image}`);
    
    var dataStr = JSON.stringify(item);
    console.log(dataStr);
    // create ajax request

    $.ajax({
        url: "http://restclass.azurewebsites.net/api/points",
        type: "POST",
        data: dataStr,
        contentType: "application/json",
        success:function(response){
            console.log("Yeiii ", response);
            $("#alert-box").removeClass("hidden");
            setTimeout(function(){
                $("#alert-box").addClass("hidden");
            },3000);

        },
        error:function(errorDetails){
            console.log("Ouuch! ", errorDetails);
        }
    });
    clearForm();
}