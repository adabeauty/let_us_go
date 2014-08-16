function showCartList(){

    loadEveryTotal();

    generateCartPanel('drinks');
    generateCartPanel('nuts');
    generateCartPanel('snacks');
    generateTotal();

    $('.up_button').on('click',upNum);
    $('.dowm_button').on('click',downNum);
    $('.delete_button').on('click',trash);

}

function loadEveryTotal(){


    var boughtGoods = Localstorage.getLocalstorage("boughtGoods");
    for(var i=0; i<boughtGoods.length; i++){
        boughtGoods[i].everyTotal = boughtGoods[i].num*boughtGoods[i].item.price;
    }

    Localstorage.setLocalstorage("boughtGoods", boughtGoods);
}

function upNum(){

    var boughtGoods = Localstorage.getLocalstorage("boughtGoods");
    for(var i=0; i<boughtGoods.length; i++){
        if(boughtGoods[i].item.name === $(this).attr("name")){
            boughtGoods[i].num++;
            Localstorage.setLocalstorage("boughtGoods", boughtGoods);
            modifyCartNum('up', 1);
            reloadInfo();
            break;
        }
    }

    boughtGoods = Localstorage.getLocalstorage("boughtGoods");
    $('#'+$(this).attr("name")).text(boughtGoods[i].num);

    $(this).closest('.row').find("span[name='cart_everyTotal']").text(boughtGoods[i].everyTotal);
    $('#cart_nums').text(boughtGoods.totalNum);
    $('#cart_total').text(boughtGoods.totalMoney);


}
function downNum(){

    var boughtGoods = Localstorage.getLocalstorage("boughtGoods");
    for(var i=0; i<boughtGoods.length; i++){
        if(boughtGoods[i].item.name === $(this).attr("name")){
            if(boughtGoods[i].num !=1){
                boughtGoods[i].num--;
                Localstorage.setLocalstorage("boughtGoods", boughtGoods);
                modifyCartNum('down', 1);
                reloadInfo();

                boughtGoods = Localstorage.getLocalstorage("boughtGoods");
                $('#'+$(this).attr("name")).text(boughtGoods[i].num);
                $(this).closest('.row').find("span[name='cart_everyTotal']").text(boughtGoods[i].everyTotal);

            }
            else{
                boughtGoods[i].num--;
                Localstorage.setLocalstorage("boughtGoods", boughtGoods);
                modifyCartNum('down', 1);
                reloadInfo();

                    boughtGoods = Localstorage.getLocalstorage("boughtGoods");
                    $('#'+$(this).attr("name")).text(boughtGoods[i].num);
                    $(this).closest('.row').find("span[name='cart_everyTotal']").text(boughtGoods[i].everyTotal);
                removeGood(i, boughtGoods);
            }

            break;
        }
    }

    $('#cart_num').text(boughtGoods.totalNum);
    $('#cart_total').text(boughtGoods.totalMoney);
    $(".cart_num").text(boughtGoods.totalNum);

}


function trash(){

    $(this).closest('.row').remove();
    var removeItemName = $(this).closest('.row').find('.show_num')[0].id;

    var boughtGoods = Localstorage.getLocalstorage("boughtGoods");

    for(var i=0; i<boughtGoods.length; i++){
        if(removeItemName === boughtGoods[i].item.name){

            modifyCartNum('down', boughtGoods[i].num);
            boughtGoods.splice(i,1);
            Localstorage.setLocalstorage("boughtGoods", boughtGoods);
            reloadInfo();

            break;
        }
    }

}

function removeGood(i, boughtGoods){

    var category = boughtGoods[i].item.category;

    boughtGoods.splice(i,1);
    Localstorage.setLocalstorage("boughtGoods", boughtGoods);

    if(category === '饮料类'){
        $('#cart_panel_drinks').remove();
        generateCartPanel('drinks');
    }
    if(category === '干果类'){
      $('#cart_panel_nuts').remove();
        generateCartPanel('nuts');
    }
    if(category === '零食类'){
      $('#cart_panel_snacks').remove();
        generateCartPanel('snacks');
    }
}

function reloadInfo(){

    loadEveryTotal();
    generateTotal();
}


function generateTotal(){

    var boughtGoods = Localstorage.getLocalstorage("boughtGoods");
    var totalNum = 0;
    var totalMoney = 0;

    for(var i=0; i<boughtGoods.length; i++){
        totalNum += boughtGoods[i].num;
        totalMoney += boughtGoods[i].everyTotal;
    }
    $('#cart_nums').text(totalNum);
    $('#cart_total').text(totalMoney);

    Localstorage.setLocalstorage("totalMoney", totalMoney);
    Localstorage.setLocalstorage("totalNum", totalNum);

}
