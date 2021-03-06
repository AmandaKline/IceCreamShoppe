//--------------------ITEM CLASS: PARENT-------------------------
function Item(edible, price, name) {
	this.isEdible = new Boolean(edible);
	this.price = price;
	this.name = new String(name);
}

Item.method('setEdible', function(edible) { //Setters
	this.isEdible = new Boolean(edible);
})

Item.method('setPrice', function(price) {
	this.price = price;
})

Item.method('setName', function(name) {
	this.name = name;
})

Item.method('getEdible', function() {	   //Getters
	return this.isEdible;
})

Item.method('getPrice', function() {
	return this.price;
})

Item.method('getName', function() {
	return this.name;
})

Item.method('toString', function() {
	return this.getName() + " " + this.getPrice();
})