
var count = 0;
var mobileNameArray = [];
var imageArray = [document.getElementById('mobile-one'), document.getElementById('mobile-two')];
var mobileName = [document.getElementById('mobile-name-one'), document.getElementById('mobile-name-two')]
var compareButton = document.getElementById('compare-btn');

function Compare(compareElement) {
    count++;
    console.log(mobileNameArray);
    if (count <= 2) {
        mobileNameArray.push(compareElement);
        var imageLocation = findImagePath(compareElement);
        var temp = count - 1;
        console.log(count);
        mobileName[temp].innerText = compareElement;
        imageArray[temp].src = imageLocation;
        imageArray[temp].alt = compareElement;
        imageArray[temp].width = 50;
        if (count == 2) {
            compareButton.disabled = false;
        }
    }
    else {
        window.alert("cannot compare more than two mobiles");
        count = 0;
    }

}

function mobileCompare(mobileOne, mobileTwo) {

}

function findImagePath(compareElement) {
    for (var brandType in brands) {
        for (var iter = 0; iter < brands[brandType].length; iter++) {
            if (brands[brandType][iter]['model'] == compareElement) {
                return brands[brandType][iter]['imageUrl'];
            }

        }
    }
}
