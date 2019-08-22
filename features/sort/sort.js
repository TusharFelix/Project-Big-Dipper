var eventClass = document.getElementsByClassName("sort-pop")
for(i=0;i<eventClass.length;i++){
	eventClass[i].addEventListener("click", priceFunction);
}
function sortObjectByKey(key){
	return function(a,b){
		if(typeof a[key] == "number" ){
			if(a[key]>b[key])
				return 1;
			return -1;
		}else{
			var dateReverse = a[key].split('-').reverse().join();
			var dateSplit = b[key].split('-').reverse().join();
			if(dateReverse>dateSplit)
				return 1;
			return -1;
		}
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
		if(order=="desc"){
			sortedArray.reverse();
		}
		createMobileBrand(brand,sortedArray);
	}
}
		
function priceFunction(event){
	var itemType = event.target.getAttribute("value");
	var order = event.target.getAttribute("data-order");
	sortBrands(itemType,order);

}