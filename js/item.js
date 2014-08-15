function Item(category, name, price, unit){
    this.name = name;
    this.price = price;
    this.unit = unit;
    this.category = category;
}

function BoughtItem(item, num){

    this.num = num;
    this.item = item;
//    this.everyTotal = || 0;
}

BoughtItem.prototype.getEveryTotal = function(){
    return this.num*this.item.price;
};
