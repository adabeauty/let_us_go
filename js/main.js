$(document).ready(function(){
// localStorage.clickcount =0;
// localStorage.boughtGoods =0;
// localStorage.totalMoney =0;

    $(".cart_num").text('('+localStorage.clickcount+')' );

    showShopList();
    $(".btn-Info").on("click", clickCounter);

    showCartList();
    showPayList();
});

function clickCounter() {

    var boughtGoods = Localstorage.getLocalstorage("boughtGoods");
    if(boughtGoods === 0){
        boughtGoods = [];
    }
    var boughtGood = goodsHasExist($(this)[0].id, boughtGoods);
    if(boughtGood){
        boughtGood.num++;
    }else{
        boughtGoods.push(new BoughtItem(getItem($(this)[0].id),1));
    }

    Localstorage.setLocalstorage("boughtGoods", boughtGoods);

    modifyCartNum('up',1);
}

function modifyCartNum(direction, num){

    var clickcount = Localstorage.getLocalstorage("clickcount");
    if(direction === 'up'){
        if (clickcount) {
            clickcount++;
        } else {
            clickcount = 1;
        }
    }
    if(direction === 'down'){
        if(clickcount != 0){
            clickcount = clickcount - num;
        }
    }

    Localstorage.setLocalstorage("clickcount", clickcount);

    $(".cart_num").text('('+clickcount+')' );

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
