$(document).ready(function(){

    $(".cart_num").text('('+localStorage.clickcount+')' );
    $(".btn-Info").on("click", clickCounter);

});


function clickCounter() {
    if(typeof(Storage) !== "undefined") {
        if (localStorage.clickcount) {
            localStorage.clickcount = Number(localStorage.clickcount)+1;
        } else {
            localStorage.clickcount = 1;
        }
        $(".cart_num").text('('+localStorage.clickcount+')' );

    } else {
        $(".cart_num").text("Sorry, your browser does not support web storage...");
    }
}
