var deletebrand=JSON.stringify(brands);
deletebrand=JSON.parse(deletebrand);
var eventClass = document.getElementsByClassName("sort-pop")
for (i = 0; i < eventClass.length; i++) {
	eventClass[i].addEventListener("click", priceFunction);
}
function sortObjectByKey(key) {
	return function (a, b) {
		if (typeof a[key] == "number") {
			if (a[key] > b[key])
				return 1;
			return -1;
		} else {
			var dateReverse = a[key].split('-').reverse().join();
			var dateSplit = b[key].split('-').reverse().join();
			if (dateReverse > dateSplit)
				return 1;
			return -1;
		}
	}
}
function removeBrand() {
	var removeElement = document.querySelectorAll('.brand-card')
	removeElement.forEach(function (item) {
		item.remove();
	});
}
function sortBrands(key, order) {
	removeBrand();
	for (brand in deletebrand) {
		var sortedArray = deletebrand[brand].sort(sortObjectByKey(key));
		if (order == "desc") {
			sortedArray.reverse();
		}
		createMobileBrand(brand, sortedArray);
	}
}

function priceFunction(event) {
	var itemType = event.target.getAttribute("value");
	var order = event.target.getAttribute("data-order");
	if(itemType=="clear"){
		removeBrand();
		renderApp(brands);
	}
	else
		sortBrands(itemType, order);

}
/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */

function myFunction() {
	document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
	if (!event.target.matches('.dropbtn')) {
		var dropdowns = document.getElementsByClassName("dropdown-content");
		var openDropdown = dropdowns[0];
		if (openDropdown.classList.contains('show')) {
			openDropdown.classList.remove('show');
		}

	}
}