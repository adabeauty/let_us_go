function showPayList(){

    var boughtGoods = JSON.parse(localStorage.getItem("boughtGoods"));
    generatePayList(boughtGoods);
    localStorage.setItem("boughtGoods",JSON.stringify(boughtGoods));
}

function generatePayList(boughtGoods){
    $('#pay_list_body').append(
        '<div class="row text-center">'
            +'<div class="col-md-1"></div>'
            +'<div class="col-md-2"><label>编号</label></div>'
            +'<div class="col-md-2"><label>名称</label></div>'
            +'<div class="col-md-2"><label>单价</label></div>'
            +'<div class="col-md-2"><label>数量</label></div>'
            +'<div class="col-md-2"><label>小计</label></div>'
        +'</div>'
        +'<div class="row text-center">'
            +'<div class="col-md-12">&nbsp;</div>'
        +'</div>'
    );
    for(var i=0; i<boughtGoods.length; i++){
        $('#pay_list_body').append(
            '<div class="row text-center">'
                +'<div class="col-md-1"></div>'
                +'<div class="col-md-2">'+ (i+1) +'</div>'
                +'<div class="col-md-2"><span id="cart_1_name">'+boughtGoods[i].item.name+'</span></div>'
                +'<div class="col-md-2"><span id="cart_1_price">'+boughtGoods[i].item.price+'元/'+boughtGoods[i].item.unit+'</span></div>'
                +'<div class="col-md-2"><span id="cart_1_num">'+boughtGoods[i].num+'</span></div>'
                +'<div class="col-md-2"><span id="cart_1_everyTotal">'+ boughtGoods[i].everyTotal +'元</span></div>'
            +'</div>'
        );
    }
    var totalMoney = JSON.parse(localStorage.getItem("totalMoney"));
    $('#pay_list_body').append(
            '<div class="row text-center">'
                +'<div class="col-md-12">&nbsp;</div>'
            +'</div>'
            +'<div class="row">'
                +'<div class="col-md-4 col-md-offset-8">数量:'+boughtGoods.length+ '</div>'
            +'</div>'
            +'<div class="row">'
                +'<div class="col-md-4 col-md-offset-8">应付金额:'+totalMoney+ '</div>'
            +'</div>'
    );

    $('#pay_list').after(
          '<div class="text-center">'
              +'<a href="../index.html" class="tn btn-primary btn-lg text-center clear_button" role="button"><span>返回主页</span></a>'
          +'</div>'
    );




}
