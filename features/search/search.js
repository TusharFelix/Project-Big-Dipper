const search = document.getElementById('search');
var submitButton = document.getElementById('submit-button');

function removeCards() {
    var removeElement = document.querySelectorAll('.brand-card')
    removeElement.forEach(function (item) {
        item.remove();
    });
}

function model_and_ram_search(list, element, regex) {
    var modelName = element.model.replace(/ |[()]/g, "");
    var mobileRam = element.ram.replace(/ |[()]/g, "");
    if (mobileRam.match(regex)) {
        list.push(element);
    }
    else if (modelName.match(regex)) {
        list.push(element);
    }
    return list;
}

function match_text(brand, searchText, filteredObject) {
    var list = [];
    searchText = searchText.replace(/ |[()]/g, "");
    const regex = new RegExp(`${searchText}`, 'gi');
    brands[brand].forEach(function (element) {
        if (brand.match(regex)) {
            filteredObject[brand] = brands[brand];
        }
        else {
            list = model_and_ram_search(list, element, regex);
        }
    });
    if (list.length != 0) {
        filteredObject[brand] = list;
    }
    return filteredObject;
}

function searchMobiles(searchText) {
    if (searchText.length == 0) {
        alert("search box is empty");
    }
    removeCards();
    var filteredObject = {};
    var mobilenames = Object.keys(brands);
    mobilenames.forEach(function (brand) {
        filteredObject = match_text(brand, searchText, filteredObject);
    });
    renderApp(filteredObject);
    if (Object.keys(filteredObject).length == 0) {
        alert("No results found...");
    }
}
submitButton.addEventListener('click', function () { searchMobiles(search.value) });
search.addEventListener('keyup', function (event) {
    if (event.keyCode === 13) {
        searchMobiles(search.value);
    }
});


