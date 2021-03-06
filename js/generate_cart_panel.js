function generateCartPanel(group, category){

    var listGroup = getGroup(group);

    if(listGroup.length){
        $('#cart_list').after(
            '<div class="panel panel-default" id="cart_panel_'+group+'">'
        );
        $('#cart_panel_'+group).append(
            '<div class="panel-heading text-center">'+category+'</div>'
        );
        $('#cart_panel_'+group).append(
            '<div class="panel-body" id="cart_body_'+group+'"></div>'
        );
        $('#cart_body_'+group).append(
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
        for(var m=0; m<listGroup.length; m++){
            if(listGroup[m].num != 0){
                $('#cart_body_'+group).append(
                  '<div class="row text-center">'
                      +'<div class="col-md-1"></div>'
                      +'<div class="col-md-1">'+ (orderListNum++) +'</div>'
                      +'<div class="col-md-2"><span id="cart_1_name">'+listGroup[m].item.name+'</span></div>'
                      +'<div class="col-md-2"><span id="cart_1_price">'+listGroup[m].item.price+'元/'+listGroup[m].item.unit+'</span></div>'
                      +'<div class="col-md-2">'
                          +'<div class="input-group">'
                              +'<span class="input-group-btn">'
                                  +'<button class="btn btn-default dowm_button_'+group+'" type="button" name="'+listGroup[m].item.name+'">-</button>'
                              +'</span>'
                              +'<span class="form-control show_num" id="'+listGroup[m].item.name+'">'+listGroup[m].num+'</span>'
                              +'<span class="input-group-btn">'
                                  +'<button class="btn btn-default up_button_'+group+'" type="button" name="'+listGroup[m].item.name+'">+</button>'
                              +'</span>'
                          +'</div>'
                      +'</div>'
                      +'<div class="col-md-2"><span name="cart_everyTotal">'+listGroup[m].everyTotal+'</span>元</div>'
                      +'<div class="col-md-1"><button class="delete_button_'+group+'"><span name="cart_everyRemove" class="glyphicon glyphicon-trash" ></span></button></div>'
                  +'</div>'
                );
            }

        }
        // emptyBoughtGoods();

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

    return returngroup(group, drinks, nuts, snacks);

}
function returngroup(group, drinks, nuts, snacks){
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

//
// function emptyBoughtGoods(){
//     var boughtGoods = Localstorage.getLocalstorage("boughtGoods");
//     if(boughtGoods.length === 0){
//         $('.cart_list_num')[0].diaplay = 'none';
//         $('.cart_list_account')[0].diaplay = 'none';
//         $('.account_button')[0].diaplay = 'none';
//     }
// }
