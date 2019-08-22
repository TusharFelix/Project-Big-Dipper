var eventClass = document.getElementsByClassName("sort-pop")
for(i=0;i<eventClass.length;i++){
	eventClass[i].addEventListener("click", priceFunction);
}
function sortObjectByKey(key, order){
	return function(a,b){
		if(a[key]>b[key])
			return 1;
		return -1;
	}
}
function removeBrand(){
	var removeElement = document.querySelectorAll('.brand-card')
	removeElement.forEach(function(item) {
	item.remove();
	});
}
function sortBrands(key,order){
	removeBrand();
	for(brand in brands){
		var sortedArray = brands[brand].sort(sortObjectByKey(key));
		console.log(sortedArray);
		if(order=="desc"){
			sortedArray.reverse();
		}
		createMobileBrand(brand,sortedArray);
	}
}
			
function priceFunction(event){
	var itemType = event.target.getAttribute("value");
	var order = event.target.getAttribute("data-order");
	console.log(event.target.getAttribute("value"));
	sortBrands(itemType,order);
}