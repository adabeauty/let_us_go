function loadItems(){
  return [
            new Item('饮料类','可口可乐', '3.00', '瓶'),
            new Item('饮料类','雪碧', '3.00', '瓶'),
            new Item('饮料类','橙汁', '3.50', '瓶'),
            new Item('干果类', '腰果', '15.00', '斤'),
            new Item('干果类', '开心果', '20.50', '斤'),
            new Item('零食类', '上好佳', '4.50', '袋'),
            new Item('零食类', '可比克', '3.50', '袋')
          ];
}

function finishShopList(){

    var allItems = loadItems();
    $('#shop_list').append(
        '<div id="shop_list_body" class="panel-body"></div>'
    );
    $('#shop_list_body').append(

        '<div class="row text-center">'
          +'<div class="col-md-2"></div>'
          +'<div class="col-md-2"><label>分类</label></div>'
          +'<div class="col-md-2"><label>名称</label></div>'
          +'<div class="col-md-2"><label>单价</label></div>'
          //+'<div class="col-md-2"><label>数量</label></div>'
          +'<div class="col-md-2"><label>购买</label></div>'
        +'</div>'
    );
    for(var i=0; i<allItems.length; i++){
        $('#shop_list_body').append(
            '<div class="row text-center">'
                +'<div class="col-md-2"></div>'
                +'<div class="col-md-2 category">' + allItems[i].category +'</div>'
                +'<div class="col-md-2 name'+i+'">' + allItems[i].name +'</div>'
                +'<div class="col-md-2 price">' + allItems[i].price+'元/' + allItems[i].unit +'</div>'
                +'<div class="col-md-2">'
                    +'<label>'
                        +'<button type="button" class="btn btn-Info buy_button" id="'+allItems[i].name+'" name="drink_1_buy">'
                            +'<span class="glyphicon glyphicon-hand-up"><span>&nbsp;添加至购物车'
                        +'</button>'
                    +'</label>'
                +'</div>'
            +'</div>'
        );
    }

}
