var compareObjectContent = {};
var count = { value: 0 };
var maximumMobileToCompare = { value: 5 };
var mobileListArray = [];
var mobileBrandListArray = [];
var brandLocaitonCount = [];
//compareContainer is the div for the compare Section
var compareContainer = document.querySelector('.compare-container');
var resultUl = document.querySelector('.compare-ul-template');
var resultLi = document.querySelector('.compare-result-list-element');
var resultTemplate = document.querySelector('.result-template');
var compareButtonStatus = document.querySelector('.compare-button');
//Table Template Variables and to create pop up model;
var tableTemplate = document.querySelector('.table-template');
var tableColumn = document.querySelector('.table-column-template');
var tableRow = document.querySelector('.table-row-template');
var myDiv = document.querySelector('.modal-content');

function compareMobiles(compareElement) {
    // Fetch the BrandName, Model and Ram of the Selected Mobile
    var mobileModel = compareElement.childNodes[1].innerText;
    var mobileModelRam = compareElement.childNodes[3].childNodes[3].innerText + " ";
    var mobileBrand = compareElement.parentElement.parentElement.childNodes[1].innerText;
    var compareTemplate = document.querySelector('.compare-template');
    var selectedMobiles = document.querySelector('.show-selected-mobiles');

    if (count['value'] == 0) {
        //this condition is when the compare element is clicked for first time
        compareContainer.style.display = "flex"; //Enable Compare Section on Choosing One Mobile
        findMobileDetails(mobileModel, mobileBrand);
        displayCompareMobiles(mobileModel, selectedMobiles, compareTemplate);
        count['value']++;
    }

    else {

        if (checkValidComparation(mobileModel)) {
            if (count['value'] < maximumMobileToCompare['value']) {
                count['value']++;
                findMobileDetails(mobileModel, mobileBrand)
                displayCompareMobiles(mobileModel, selectedMobiles, compareTemplate);
                compareButtonStatus.style.display = "flex";
            }
            else {
                raiseAlert("Cannot compare More than " + maximumMobileToCompare['value'] + " Mobiles");
            }
        }
        else {
            raiseAlert("Selected Mobile is Already Added to compare");
        }
    }
}

function findMobileDetails(mobileModel, mobileBrand) {
    //this function returns the complete details of the selected Mobile and stores in the Object compareObjectContent
    for (var iter = 0; iter < brands[mobileBrand].length; iter++) {
        if (brands[mobileBrand][iter]['model'] == mobileModel) {
            compareObjectContent[mobileModel] = brands[mobileBrand][iter];
            mobileListArray.push(brands[mobileBrand][iter]['model']);
            mobileBrandListArray.push(mobileBrand);
            brandLocaitonCount.push(iter);
            return true;
        }
    }
}

function checkValidComparation(mobileModel) {
    //This function returns true if there duplicate Comparation
    if (compareObjectContent[mobileModel] != undefined) {
        return false;
    }
    else {

        return true;
    }
}

function displayCompareMobiles(mobileModel, selectedMobiles, compareTemplate) {
    var compareTemplateNode = compareTemplate.cloneNode(true);
    compareTemplateNode.classList.remove('compare-template');
    compareTemplateNode.setAttribute('data-model', mobileModel);
    compareTemplateNode.querySelector('.close-button').setAttribute('data-mobile-model', mobileModel)
    compareTemplateNode.classList.remove('compare-template');
    compareTemplateNode.querySelector('.compare-img').src = compareObjectContent[mobileModel]['imageUrl'];
    compareTemplateNode.querySelector('.compare-details-brand-model').innerText = mobileModel;
    compareTemplateNode.querySelector('.compare-img').alt = mobileModel;
    selectedMobiles.appendChild(compareTemplateNode);
}

function raiseAlert(message) {
    window.alert(message);
}


//new logic for table insertion;
var myModal = document.getElementById("modal");
var btn = document.getElementById("compare-btn");
var span = document.getElementsByClassName("close")[0];

function popUpModal() {

    myModal.style.display = "block";
    span.onclick = function () {
        var removeTableAfterComparation = myDiv.childNodes[5];
        removeTableAfterComparation.remove();
        console.log(removeTableAfterComparation);
        myModal.style.display = "none";

    }
    compareMobileFeature();
}
function compareMobileFeature() {
    var tableTemplateNode = tableTemplate.cloneNode(false);
    tableTemplateNode.classList.remove('table-template');
    console.log(mobileBrandListArray, "mobile brand List", "compare mobile feature section");
    console.log(brandLocaitonCount, "locaiton count ", "compare mobile feature section");
    console.log(mobileListArray, "mobile list array", "compare mobile feature seciton");
    var mobileKeys = Object.keys(brands[mobileBrandListArray[0]][brandLocaitonCount[0]]);
    for (let iterator = 0; iterator < mobileKeys.length - 1; iterator++) {
        var tableRowNode = tableRow.cloneNode(false);
        if (iterator == 0) {
            if (true) {
                for (let loopVar = 0; loopVar < mobileBrandListArray.length; loopVar++) {
                    var tableColumnNode = tableColumn.cloneNode(true);
                    tableColumnNode.innerHTML = "<img src=" + brands[mobileBrandListArray[loopVar]][brandLocaitonCount[loopVar]]["imageUrl"] + " " + "alt=" + mobileListArray[loopVar] + " >";
                    tableRowNode.appendChild(tableColumnNode);
                }
                tableTemplateNode.appendChild(tableRowNode);
            }
            var tableRowNode = tableRow.cloneNode(false);
            for (let loopVar = 0; loopVar < mobileBrandListArray.length; loopVar++) {
                var tableColumnNode = tableColumn.cloneNode(true);
                tableColumnNode.innerText = brands[mobileBrandListArray[loopVar]][brandLocaitonCount[loopVar]][mobileKeys[iterator]];
                tableRowNode.appendChild(tableColumnNode);
            }
            tableTemplateNode.appendChild(tableRowNode);

        }


        else {
            for (let loopVar = 0; loopVar < mobileBrandListArray.length; loopVar++) {
                var tableColumnNode = tableColumn.cloneNode(true);
                tableColumnNode.innerText = brands[mobileBrandListArray[loopVar]][brandLocaitonCount[loopVar]][mobileKeys[iterator]];
                tableRowNode.appendChild(tableColumnNode);
            }
        }
        tableTemplateNode.appendChild(tableRowNode);
    }
    myDiv.appendChild(tableTemplateNode);
}


function removeFunction(removeArgument) {
    var modelToRemove = removeArgument.getAttribute('data-mobile-model');
    var removeModel = removeArgument.parentElement;
    delete compareObjectContent[modelToRemove];

    count['value']--;
    var arrayIndex = mobileListArray.indexOf(modelToRemove);
    if (arrayIndex > -1) {
        mobileListArray.splice(arrayIndex, 1);
        console.log(mobileListArray, "mobile list array ", "value in remove section");
        mobileBrandListArray.splice(arrayIndex, 1);
        brandLocaitonCount.splice(arrayIndex, 1);
        console.log(mobileBrandListArray, "mobile Brand List", "value in remove section");
        console.log(brandLocaitonCount, "brand locaiton count", "value in remove section");

    }

    if (count['value'] == 0) {
        compareContainer.style.display = "none";

    }
    if (count['value'] == 1) {
        compareButtonStatus.style.display = "none";

    }
    removeModel.remove();

}