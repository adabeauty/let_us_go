function showCartList(){

    loadEveryTotal();

    generateDrinks();
    generateNuts();
    generateSnacks();

    generateTotal();
    $('.up_button').on('click',upNum);
    $('.dowm_button').on('click',downNum);
    $('.delete_button').on('click',removeItem);



}
function removeItem(){

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
function getGroup(group){
    var drinks = [];
    var nuts = [];
    var snacks = [];

    var boughtGoods = Localstorage.getLocalstorage("boughtGoods");
    for(var i=0; i<boughtGoods.length; i++){

        if(boughtGoods[i].item.category === "饮料类"){
            drinks.push(boughtGoods[i]);
        }

        if(boughtGoods[i].item.category === "干果类"){
            nuts.push(boughtGoods[i]);
        }
        if(boughtGoods[i].item.category === "零食类"){
            snacks.push(boughtGoods[i]);
        }
    }

    if(group === 'drinks'){
        return drinks;
    }
    if(group === 'nuts'){
        return nuts;
    }
    if(group === 'snacks'){
        return snacks;
    }
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
                //
                $(this).closest('.row').find("span[name='cart_everyTotal']").text(boughtGoods[i].everyTotal);
                // $('#cart_num').text(boughtGoods.totalNum);
                // $('#cart_total').text(boughtGoods.totalMoney);
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

            // boughtGoods[i].num--;
            // modifyCartNum('down');
            // reloadInfo(boughtGoods);
            break;
        }
    }
    //
    // boughtGoods = Localstorage.getLocalstorage("boughtGoods");
    // $('#'+$(this).attr("name")).text(boughtGoods[i].num);
    //
    // $(this).closest('.row').find("span[name='cart_everyTotal']").text(boughtGoods[i].everyTotal);
    $('#cart_num').text(boughtGoods.totalNum);
    $('#cart_total').text(boughtGoods.totalMoney);
    $(".cart_num").text(boughtGoods.totalNum);

}
function removeGood(i, boughtGoods){

    var category = boughtGoods[i].item.category;
    // console.log(boughtGoods[i].category);
    boughtGoods.splice(i,1);
    Localstorage.setLocalstorage("boughtGoods", boughtGoods);
    // console.log(boughtGoods[i].category);
    if(category === '饮料类'){
        $('#cart_panel_1').remove();
        generateDrinks();
        // console.log("delete");
    }
    if(category === '干果类'){
      $('#cart_panel_2').remove();
        generateNuts();
    }
    if(category === '零食类'){
      $('#cart_panel_3').remove();
        generateSnacks();
    }
}
function reloadInfo(){

    // Localstorage.setLocalstorage("boughtGoods", boughtGoods);
    loadEveryTotal();
    generateTotal();
}

function generateDrinks(){
    var drinks = getGroup('drinks');
    // if()
    if(drinks.length){
        $('#cart_list').after(
            '<div class="panel panel-default" id="cart_panel_1">'
        );
        $('#cart_panel_1').append(
            '<div class="panel-heading text-center">饮料类</div>'
        );
        $('#cart_panel_1').append(
            '<div class="panel-body" id="cart_body_1"></div>'
        );
        $('#cart_body_1').append(
            '<div class="row text-center">'
                +'<div class="col-md-1"></div>'
                +'<div class="col-md-1"><label>编号</label></div>'
                +'<div class="col-md-2"><label>名称</label></div>'
                +'<div class="col-md-2"><label>单价</label></div>'
                +'<div class="col-md-2"><label>数量</label></div>'
                +'<div class="col-md-2"><label>小计</label></div>'
                +'<div class="col-md-1"><label>删除</label></div>'
            +'</div>'
        );
        var orderListNum = 1;
        for(var m=0; m<drinks.length; m++){
            if(drinks[m].num != 0){
                $('#cart_body_1').append(
                  '<div class="row text-center">'
                      +'<div class="col-md-1"></div>'
                      +'<div class="col-md-1">'+ (orderListNum++) +'</div>'
                      +'<div class="col-md-2"><span name="cart_1_name">'+drinks[m].item.name+'</span></div>'
                      +'<div class="col-md-2"><span name="cart_1_price">'+drinks[m].item.price+'元/'+drinks[m].item.unit+'</span></div>'
                      +'<div class="col-md-2">'
                          +'<div class="input-group">'
                              +'<span class="input-group-btn">'
                                  +'<button class="btn btn-default dowm_button" type="button" name="'+drinks[m].item.name+'">-</button>'
                              +'</span>'
                              +'<span class="form-control show_num" id="'+drinks[m].item.name+'">'+drinks[m].num+'</span>'
                              +'<span class="input-group-btn">'
                                  +'<button class="btn btn-default up_button" type="button" name="'+drinks[m].item.name+'">+</button>'
                              +'</span>'
                          +'</div>'
                      +'</div>'
                      +'<div class="col-md-2"><span name="cart_everyTotal">'+ drinks[m].everyTotal +'元</span></div>'
                      // +'<div class="col-md-1"><span name="cart_everyRemove" class="glyphicon glyphicon-trash"></span></div>'
                      +'<div class="col-md-1"><button class="delete_button"><span name="cart_everyRemove" class="glyphicon glyphicon-trash" ></span></button></div>'
                  +'</div>'
                );
            }
            // $('#cart_body_1').append(
            //   '<div class="row text-center">'
            //       +'<div class="col-md-1"></div>'
            //       +'<div class="col-md-1">'+ (m+1) +'</div>'
            //       +'<div class="col-md-2"><span id="cart_1_name">'+drinks[m].item.name+'</span></div>'
            //       +'<div class="col-md-2"><span id="cart_1_price">'+drinks[m].item.price+'元/'+drinks[m].item.unit+'</span></div>'
            //       +'<div class="col-md-2">'
            //           +'<div class="input-group">'
            //               +'<span class="input-group-btn">'
            //                   +'<button class="btn btn-default dowm_button" type="button" name="'+drinks[m].item.name+'">-</button>'
            //               +'</span>'
            //               +'<span class="form-control" id="'+drinks[m].item.name+'">'+drinks[m].num+'</span>'
            //               +'<span class="input-group-btn">'
            //                   +'<button class="btn btn-default up_button" type="button" name="'+drinks[m].item.name+'">+</button>'
            //               +'</span>'
            //           +'</div>'
            //       +'</div>'
            //       +'<div class="col-md-2"><span name="cart_everyTotal">'+ drinks[m].everyTotal +'元</span></div>'
            //       +'<div class="col-md-1"><span name="cart_everyRemove" class="glyphicon glyphicon-trash"></span></div>'
            //   +'</div>'
            // );
        }
    }

}

function generateNuts(nuts){
    var nuts = getGroup('nuts');
    if(nuts.length){
        $('#cart_list').after(
            '<div class="panel panel-default" id="cart_panel_2">'
        );
        $('#cart_panel_2').append(
            '<div class="panel-heading text-center">干果类</div>'
        );
        $('#cart_panel_2').append(
            '<div class="panel-body" id="cart_body_2"></div>'
        );
        $('#cart_body_2').append(
            '<div class="row text-center">'
                +'<div class="col-md-1"></div>'
                +'<div class="col-md-1"><label>编号</label></div>'
                +'<div class="col-md-2"><label>名称</label></div>'
                +'<div class="col-md-2"><label>单价</label></div>'
                +'<div class="col-md-2"><label>数量</label></div>'
                +'<div class="col-md-2"><label>小计</label></div>'
                +'<div class="col-md-1"><label>删除</label></div>'
            +'</div>'
        );
        var orderListNum = 1;
        for(var m=0; m<nuts.length; m++){
            if(nuts[m].num != 0){
                $('#cart_body_2').append(
                  '<div class="row text-center">'
                      +'<div class="col-md-1"></div>'
                      +'<div class="col-md-1">'+ (orderListNum++) +'</div>'
                      +'<div class="col-md-2"><span id="cart_1_name">'+nuts[m].item.name+'</span></div>'
                      +'<div class="col-md-2"><span id="cart_1_price">'+nuts[m].item.price+'元/'+nuts[m].item.unit+'</span></div>'
                      +'<div class="col-md-2">'
                          +'<div class="input-group">'
                              +'<span class="input-group-btn">'
                                  +'<button class="btn btn-default dowm_button" type="button" name="'+nuts[m].item.name+'">-</button>'
                              +'</span>'
                              +'<span class="form-control show_num" id="'+nuts[m].item.name+'">'+nuts[m].num+'</span>'
                              +'<span class="input-group-btn">'
                                  +'<button class="btn btn-default up_button" type="button" name="'+nuts[m].item.name+'">+</button>'
                              +'</span>'
                          +'</div>'
                      +'</div>'
                      +'<div class="col-md-2"><span name="cart_everyTotal">'+ nuts[m].everyTotal +'元</span></div>'
                      // +'<div class="col-md-1"><span name="cart_everyRemove" class="glyphicon glyphicon-trash"></span></div>'
                      +'<div class="col-md-1"><button class="delete_button"><span name="cart_everyRemove" class="glyphicon glyphicon-trash" ></span></button></div>'
                  +'</div>'
                );
            }

        }
    }

}

function generateSnacks(snacks){
    var snacks = getGroup('snacks');
    if(snacks.length){
        $('#cart_list').after(
            '<div class="panel panel-default" id="cart_panel_3">'
        );
        $('#cart_panel_3').append(
            '<div class="panel-heading text-center">零食类</div>'
        );
        $('#cart_panel_3').append(
            '<div class="panel-body" id="cart_body_3"></div>'
        );
        $('#cart_body_3').append(
            '<div class="row text-center">'
                +'<div class="col-md-1"></div>'
                +'<div class="col-md-1"><label>编号</label></div>'
                +'<div class="col-md-2"><label>名称</label></div>'
                +'<div class="col-md-2"><label>单价</label></div>'
                +'<div class="col-md-2"><label>数量</label></div>'
                +'<div class="col-md-2"><label>小计</label></div>'
                +'<div class="col-md-1"><label>删除</label></div>'

            +'</div>'
        );
        var orderListNum = 1;
        for(var m=0; m<snacks.length; m++){
            if(snacks[m].num != 0){
                $('#cart_body_3').append(
                  '<div class="row text-center">'
                      +'<div class="col-md-1"></div>'
                      +'<div class="col-md-1">'+ (orderListNum++) +'</div>'
                      +'<div class="col-md-2"><span id="cart_1_name">'+snacks[m].item.name+'</span></div>'
                      +'<div class="col-md-2"><span id="cart_1_price">'+snacks[m].item.price+'元/'+snacks[m].item.unit+'</span></div>'
                      +'<div class="col-md-2">'
                          +'<div class="input-group">'
                              +'<span class="input-group-btn">'
                                  +'<button class="btn btn-default dowm_button" type="button" name="'+snacks[m].item.name+'">-</button>'
                              +'</span>'
                              +'<span class="form-control show_num" id="'+snacks[m].item.name+'">'+snacks[m].num+'</span>'
                              +'<span class="input-group-btn">'
                                  +'<button class="btn btn-default up_button" type="button" name="'+snacks[m].item.name+'">+</button>'
                              +'</span>'
                          +'</div>'
                      +'</div>'
                      +'<div class="col-md-2"><span name="cart_everyTotal">'+snacks[m].everyTotal+'元</span></div>'
                      +'<div class="col-md-1"><button class="delete_button"><span name="cart_everyRemove" class="glyphicon glyphicon-trash" ></span></button></div>'
                  +'</div>'
                );
            }

        }
    }

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
