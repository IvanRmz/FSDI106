function init() {
    console.log("catalog page")

    if(typeof emptyArray === "undefined" || emptyArray == null  || emptyArray.length == 0){
        fetchData();
    }

    $("#btn-register").on("click",register);
}

window.onload=init;

function register() {
    // get values from the inputs
    // save them in variables
    var code = $("#code").val();
        var title = $("#title").val();
        var price = $("#price").val();
        var category = $("#category").val();
        var image = $("#image").val();

        console.log(`code: ${code}, title: ${title}, price: $${price}, category: ${category}, image: ${image}`);
}