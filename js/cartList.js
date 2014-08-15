function showCartList(){
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
//    transformToJson(drinks, nuts, snacks);
    generateDrinks(drinks);
    generateNuts(nuts);
    generateSnacks(snacks);
    generateTotal(drinks, nuts, snacks);

    localStorage.setItem("boughtGoods",JSON.stringify(boughtGoods));
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
            drinks[m].everyTotal = drinks[m].num*drinks[m].item.price;
            $('#cart_body_1').append(
              '<div class="row text-center">'
                  +'<div class="col-md-1"></div>'
                  +'<div class="col-md-1">'+ (m+1) +'</div>'
                  +'<div class="col-md-2"><span id="cart_1_name">'+drinks[m].item.name+'</span></div>'
                  +'<div class="col-md-2"><span id="cart_1_price">'+drinks[m].item.price+'元/'+drinks[m].item.unit+'</span></div>'
                  +'<div class="col-md-2"><span id="cart_1_num">'+drinks[m].num+'</span></div>'
                  +'<div class="col-md-2"><span id="cart_1_everyTotal">'+ drinks[m].everyTotal +'元</span></div>'
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
            nuts[m].everyTotal = nuts[m].num*nuts[m].item.price;
            $('#cart_body_2').append(
              '<div class="row text-center">'
                  +'<div class="col-md-1"></div>'
                  +'<div class="col-md-1">'+ (m+1) +'</div>'
                  +'<div class="col-md-2"><span id="cart_1_name">'+nuts[m].item.name+'</span></div>'
                  +'<div class="col-md-2"><span id="cart_1_price">'+nuts[m].item.price+'元/'+nuts[m].item.unit+'</span></div>'
                  +'<div class="col-md-2"><span id="cart_1_num">'+nuts[m].num+'</span></div>'
                  +'<div class="col-md-2"><span id="cart_1_everyTotal">'+ nuts[m].everyTotal +'元</span></div>'
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
            snacks[m].everyTotal = snacks[m].num*snacks[m].item.price;
            $('#cart_body_3').append(
              '<div class="row text-center">'
                  +'<div class="col-md-1"></div>'
                  +'<div class="col-md-1">'+ (m+1) +'</div>'
                  +'<div class="col-md-2"><span id="cart_1_name">'+snacks[m].item.name+'</span></div>'
                  +'<div class="col-md-2"><span id="cart_1_price">'+snacks[m].item.price+'元/'+snacks[m].item.unit+'</span></div>'
                  +'<div class="col-md-2"><span id="cart_1_num">'+snacks[m].num+'</span></div>'
                  +'<div class="col-md-2"><span id="cart_1_everyTotal">'+snacks[m].everyTotal+'元</span></div>'
              +'</div>'
            );
        }
    }
}

// function generateTotal(drinks, nuts, snacks){
//
// }
function generateTotal(drinks, nuts, snacks){

    var totalNum = 0;
    var totalMoney = 0;
    for(var i=0; i<drinks.length; i++){
        totalNum += drinks[i].num;
        totalMoney += drinks[i].everyTotal;
    }
    for(var i=0; i<nuts.length; i++){
        totalNum += nuts[i].num;
        totalMoney += nuts[i].everyTotal;
    }
    for(var i=0; i<snacks.length; i++){
        totalNum += snacks[i].num;
        totalMoney += snacks[i].everyTotal;
    }
    $('#cart_num').text(totalNum);
    $('#cart_total').text(totalMoney);
    localStorage.setItem("totalMoney",JSON.stringify(totalMoney));
}
// function transformToJson(drinks, nuts, snacks){
//
// //  var localDrinks = JSON.parse(localStorage.getItem("drinks"));
//   localStorage.setItem("drinks",JSON.stringify(drinks));
//
// //  var localNuts = JSON.parse(localStorage.getItem("nutss"));
//   localStorage.setItem("nuts",JSON.stringify(nuts));
//
// //  var localSnacks = JSON.parse(localStorage.getItem("snacks"));
//   localStorage.setItem("snacks",JSON.stringify(snacks));
//
// }
