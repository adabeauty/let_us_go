function Items(names, prices, units){
    this.names = names;
    this.prices = prices;
    this.units = units;
};

Items.prototype.addToStorage(){
  localStorage.setItem("name",this.names );
  localStorage.setItem("price", this.prices);
  localStorage.setItem("units", this.units);
};
