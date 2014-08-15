function showCartList(){

    loadEveryTotal();
    var boughtGoods = JSON.parse(localStorage.getItem("boughtGoods"));
    if(boughtGoods === 0){
        boughtGoods = [];
    }
    var drinks = [];
    var nuts = [];
    var snacks = [];

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


    generateDrinks(drinks);
    generateNuts(nuts);
    generateSnacks(snacks);

    generateTotal();
    $('.up_button').on('click',upNum);
    $('.dowm_button').on('click',downNum);


}
function loadEveryTotal(){

    var boughtGoods = JSON.parse(localStorage.getItem("boughtGoods"));
    for(var i=0; i<boughtGoods.length; i++){
        boughtGoods[i].everyTotal = boughtGoods[i].num*boughtGoods[i].item.price;
    }
    localStorage.setItem("boughtGoods",JSON.stringify(boughtGoods));

}

function upNum(){
    var boughtGoods = JSON.parse(localStorage.getItem("boughtGoods"));
    for(var i=0; i<boughtGoods.length; i++){
        if(boughtGoods[i].item.name === $(this).attr("name")){
            boughtGoods[i].num++;
            reloadInfo(boughtGoods);
            break;
        }
    }
    // getNewPage(i);
    boughtGoods = JSON.parse(localStorage.getItem("boughtGoods"));
    $('#'+$(this).attr("name")).text(boughtGoods[i].num);

    $(this).closest('.row').find("span[name='cart_everyTotal']").text(boughtGoods[i].everyTotal);
    $('#cart_num').text(boughtGoods.totalNum);
    $('#cart_total').text(boughtGoods.totalMoney);

}
function downNum(){
    var boughtGoods = JSON.parse(localStorage.getItem("boughtGoods"));
    for(var i=0; i<boughtGoods.length; i++){
        if(boughtGoods[i].item.name === $(this).attr("name")){
            boughtGoods[i].num--;
            reloadInfo(boughtGoods);
            break;
        }
    }
    boughtGoods = JSON.parse(localStorage.getItem("boughtGoods"));
    $('#'+$(this).attr("name")).text(boughtGoods[i].num);

    $(this).closest('.row').find("span[name='cart_everyTotal']").text(boughtGoods[i].everyTotal);
    $('#cart_num').text(boughtGoods.totalNum);
    $('#cart_total').text(boughtGoods.totalMoney);

}
function reloadInfo(boughtGoods){
    localStorage.setItem("boughtGoods",JSON.stringify(boughtGoods));
    loadEveryTotal();
    generateTotal();
}

function generateDrinks(drinks){

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
            +'</div>'
        );
        for(var m=0; m<drinks.length; m++){
            // drinks[m].everyTotal = drinks[m].num*drinks[m].item.price;
            $('#cart_body_1').append(
              '<div class="row text-center">'
                  +'<div class="col-md-1"></div>'
                  +'<div class="col-md-1">'+ (m+1) +'</div>'
                  +'<div class="col-md-2"><span id="cart_1_name">'+drinks[m].item.name+'</span></div>'
                  +'<div class="col-md-2"><span id="cart_1_price">'+drinks[m].item.price+'元/'+drinks[m].item.unit+'</span></div>'
                  //+'<div class="col-md-2"><span id="cart_1_num">'+drinks[m].num+'</span></div>'
                  +'<div class="col-md-2">'
                      +'<div class="input-group">'
                          +'<span class="input-group-btn">'
                              +'<button class="btn btn-default dowm_button" type="button" name="'+drinks[m].item.name+'">-</button>'
                          +'</span>'
                          +'<span class="form-control" id="'+drinks[m].item.name+'">'+drinks[m].num+'</span>'
                          +'<span class="input-group-btn">'
                              +'<button class="btn btn-default up_button" type="button" name="'+drinks[m].item.name+'">+</button>'
                          +'</span>'
                      +'</div>'
                  +'</div>'
                  +'<div class="col-md-2"><span name="cart_everyTotal">'+ drinks[m].everyTotal +'元</span></div>'
                  +'<div class="col-md-2"><span name="cart_everyRemove" class="glyphicon glyphicon-trash"></span></div>'
              +'</div>'
            );
        }
    }

}

function generateNuts(nuts){
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
            +'</div>'
        );
        for(var m=0; m<nuts.length; m++){
            // nuts[m].everyTotal = nuts[m].num*nuts[m].item.price;
            $('#cart_body_2').append(
              '<div class="row text-center">'
                  +'<div class="col-md-1"></div>'
                  +'<div class="col-md-1">'+ (m+1) +'</div>'
                  +'<div class="col-md-2"><span id="cart_1_name">'+nuts[m].item.name+'</span></div>'
                  +'<div class="col-md-2"><span id="cart_1_price">'+nuts[m].item.price+'元/'+nuts[m].item.unit+'</span></div>'
                  +'<div class="col-md-2">'
                      +'<div class="input-group">'
                          +'<span class="input-group-btn">'
                              +'<button class="btn btn-default dowm_button" type="button" name="'+nuts[m].item.name+'">-</button>'
                          +'</span>'
                          +'<span class="form-control" id="'+nuts[m].item.name+'">'+nuts[m].num+'</span>'
                          +'<span class="input-group-btn">'
                              +'<button class="btn btn-default up_button" type="button" name="'+nuts[m].item.name+'">+</button>'
                          +'</span>'
                      +'</div>'
                  +'</div>'
                  +'<div class="col-md-2"><span name="cart_everyTotal">'+ nuts[m].everyTotal +'元</span></div>'
                  +'<div class="col-md-2"><span name="cart_everyRemove" class="glyphicon glyphicon-trash"></span></div>'
              +'</div>'
            );
        }
    }

}

function generateSnacks(snacks){
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
            +'</div>'
        );
        for(var m=0; m<snacks.length; m++){
            // snacks[m].everyTotal = snacks[m].num*snacks[m].item.price;
            $('#cart_body_3').append(
              '<div class="row text-center">'
                  +'<div class="col-md-1"></div>'
                  +'<div class="col-md-1">'+ (m+1) +'</div>'
                  +'<div class="col-md-2"><span id="cart_1_name">'+snacks[m].item.name+'</span></div>'
                  +'<div class="col-md-2"><span id="cart_1_price">'+snacks[m].item.price+'元/'+snacks[m].item.unit+'</span></div>'
                  +'<div class="col-md-2">'
                      +'<div class="input-group">'
                          +'<span class="input-group-btn">'
                              +'<button class="btn btn-default dowm_button" type="button" name="'+snacks[m].item.name+'">-</button>'
                          +'</span>'
                          +'<span class="form-control" id="'+snacks[m].item.name+'">'+snacks[m].num+'</span>'
                          +'<span class="input-group-btn">'
                              +'<button class="btn btn-default up_button" type="button" name="'+snacks[m].item.name+'">+</button>'
                          +'</span>'
                      +'</div>'
                  +'</div>'
                  +'<div class="col-md-2"><span name="cart_everyTotal">'+snacks[m].everyTotal+'元</span></div>'
                  +'<div class="col-md-2"><span name="cart_everyRemove" class="glyphicon glyphicon-trash"></span></div>'
              +'</div>'
            );
        }
    }

}


function generateTotal(){
    var boughtGoods = JSON.parse(localStorage.getItem("boughtGoods"));
    var totalNum = 0;
    var totalMoney = 0;

    for(var i=0; i<boughtGoods.length; i++){
        totalNum += boughtGoods[i].num;
        totalMoney += boughtGoods[i].everyTotal;
    }
    $('#cart_num').text(totalNum);
    $('#cart_total').text(totalMoney);
    localStorage.setItem("totalMoney",JSON.stringify(totalMoney));
    localStorage.setItem("totalNum",JSON.stringify(totalNum));
}
