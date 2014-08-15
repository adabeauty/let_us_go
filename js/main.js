$(document).ready(function(){
    // localStorage.clickcount =0;
    // localStorage.boughtGoods =0;
    $(".cart_num").text('('+localStorage.clickcount+')' );   //结束购物后清零
    // $(".btn-Info").on("click", clickCounter);
    showShopList();
    $(".btn-Info").on("click", clickCounter);
    showCartList();
    showPayList();
    // $(".btn-Info").on("click", clickCounter);


});

function clickCounter() {

    var boughtGoods = JSON.parse(localStorage.getItem("boughtGoods"));
    if(boughtGoods === 0){
        boughtGoods = [];
    }
    var boughtGood = goodsHasExist($(this)[0].id, boughtGoods);
    if(boughtGood){
        boughtGood.num++;
    }else{
        boughtGoods.push(new BoughtItem(getItem($(this)[0].id),1));
    }

    localStorage.setItem("boughtGoods",JSON.stringify(boughtGoods));

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

function getItem(name){
    var Item
    var allItems = loadItems();
    for(var i=0; i<allItems.length; i++){
        if(name == allItems[i].name){
            Item = allItems[i];
            break;
        }
    }
    return Item;
}

function goodsHasExist(name,boughtGoods){
    var boughtGood;
    if(boughtGoods){
        for(var i=0; i<boughtGoods.length; i++){
            if(name === boughtGoods[i].item.name){
                boughtGood = boughtGoods[i];
                break;
            }
        }
    }else{
        boughtGood=false;
    }

    return boughtGood;
}
