function showCartList(){

    reloadInfo();

    generateCartPanel('drinks', '饮料类');
    generateCartPanel('nuts', '干果类');
    generateCartPanel('snacks', '零食类');

    // $('.up_button').on('click',upNum);
    // $('.dowm_button').on('click',downNum);
    // $('.delete_button').on('click',trash);
    $('.up_button_drinks').on('click',upNum);
    $('.dowm_button_drinks').on('click',downNum);
    $('.delete_button_drinks').on('click',trash);

    $('.up_button_nuts').on('click',upNum);
    $('.dowm_button_nuts').on('click',downNum);
    $('.delete_button_nuts').on('click',trash);

    $('.up_button_snacks').on('click',upNum);
    $('.dowm_button_snacks').on('click',downNum);
    $('.delete_button_snacks').on('click',trash);

}
function reloadInfo(){

    loadEveryTotal();
    generateTotal();
}


function loadEveryTotal(){


    var boughtGoods = Localstorage.getLocalstorage("boughtGoods");
    for(var i=0; i<boughtGoods.length; i++){
        boughtGoods[i].everyTotal = boughtGoods[i].num*boughtGoods[i].item.price;
    }

    Localstorage.setLocalstorage("boughtGoods", boughtGoods);
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
function upNum(){

    var boughtGoods = Localstorage.getLocalstorage("boughtGoods");
    for(var i=0; i<boughtGoods.length; i++){
        if(boughtGoods[i].item.name === $(this).attr("name")){
            upDownModify(i, 'up');

            break;
        }
    }

    boughtGoods = Localstorage.getLocalstorage("boughtGoods");
    $('#'+$(this).attr("name")).text(boughtGoods[i].num);
    $(this).closest('.row').find("span[name='cart_everyTotal']").text(boughtGoods[i].everyTotal);


}
function downNum(){

    var boughtGoods = Localstorage.getLocalstorage("boughtGoods");
    for(var i=0; i<boughtGoods.length; i++){
        if(boughtGoods[i].item.name === $(this).attr("name")){
            if(boughtGoods[i].num !=1){
                upDownModify(i, 'down');

                boughtGoods = Localstorage.getLocalstorage("boughtGoods");
                $('#'+$(this).attr("name")).text(boughtGoods[i].num);
                $(this).closest('.row').find("span[name='cart_everyTotal']").text(boughtGoods[i].everyTotal);

            }else{
                upDownModify(i, 'down');

                boughtGoods = Localstorage.getLocalstorage("boughtGoods");
                $('#'+$(this).attr("name")).text(boughtGoods[i].num);
                $(this).closest('.row').find("span[name='cart_everyTotal']").text(boughtGoods[i].everyTotal);
                removeGood(i);
            }

            break;
        }
    }


}

function upDownModify(i, direnction){

    var boughtGoods = Localstorage.getLocalstorage("boughtGoods");
    if(direnction === 'down'){
        boughtGoods[i].num --;
    }
    if(direnction === 'up'){
        boughtGoods[i].num ++;
    }
    Localstorage.setLocalstorage("boughtGoods", boughtGoods);
    modifyCartNum(direnction, 1);
    reloadInfo();

}
function trash(){

    var removeItemName = $(this).closest('.row').find('.show_num')[0].id;

    var boughtGoods = Localstorage.getLocalstorage("boughtGoods");

    for(var i=0; i<boughtGoods.length; i++){
        if(removeItemName === boughtGoods[i].item.name){

            var category = boughtGoods[i].item.category;

            modifyCartNum('down', boughtGoods[i].num);
            boughtGoods.splice(i,1);
            Localstorage.setLocalstorage("boughtGoods", boughtGoods);
            reloadInfo();
            // reloadPanel(category);
            break;
        }
    }
   $(this).closest('.row').remove();
    reloadPanel(category);
    // showCartList();
}

function removeGood(i){
    var boughtGoods = Localstorage.getLocalstorage("boughtGoods");
    var category = boughtGoods[i].item.category;

    boughtGoods.splice(i,1);
    Localstorage.setLocalstorage("boughtGoods", boughtGoods);

    reloadPanel(category);
    reloadInfo();

}

function reloadPanel(category){
    if(category === '饮料类'){
        $('#cart_panel_drinks').remove();
        generateCartPanel('drinks', '饮料类');
        $('.up_button_drinks').on('click',upNum);
        $('.dowm_button_drinks').on('click',downNum);
        $('.delete_button_drinks').on('click',trash);
    }
    if(category === '干果类'){
        $('#cart_panel_nuts').remove();
        generateCartPanel('nuts', '干果类');

        $('.up_button_nuts').on('click',upNum);
        $('.dowm_button_nuts').on('click',downNum);
        $('.delete_button_nuts').on('click',trash);

    }
    if(category === '零食类'){
        $('#cart_panel_snacks').remove();
        generateCartPanel('snacks', '零食类');


        $('.up_button_snacks').on('click',upNum);
        $('.dowm_button_snacks').on('click',downNum);
        $('.delete_button_snacks').on('click',trash);
    }

}
