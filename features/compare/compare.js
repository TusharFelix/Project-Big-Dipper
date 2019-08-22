var count = 0;
var mobileNameArray = [];
var imageArray = [document.getElementById('mobile-one'), document.getElementById('mobile-two')];
var mobileName = [document.getElementById('mobile-name-one'), document.getElementById('mobile-name-two')]
var compareButton = document.getElementById('compare-btn');
var compareContainer = document.querySelector('.compare-container');
var removeBtn = [document.getElementById('mobileRemoveBtnOne'),document.getElementById('mobileRemoveBtnTwo')];

if (count == 0) {
    compareContainer.style.display = "none";
}

function Compare(compareBrand,compareElement,compareRam) {
  
    count++;
    if (count <= 2) {
        compareContainer.style.display = "flex";
        var imageLocation = findImagePath(compareBrand,compareElement,compareRam);
        if(mobileNameArray[mobileNameArray.length-count]['model']==compareElement && count == 2){
            count--;
            return window.alert("Select Different Mobile");
            
        }
        var temp = count - 1;
        mobileName[temp].innerText = compareElement;
        imageArray[temp].src = imageLocation;
        imageArray[temp].alt = compareElement;
        imageArray[temp].width = 50;
        removeBtn[temp].style.display = "block";
        if (count == 2) {
            compareButton.disabled = false;
        }
    }
    else {
        window.alert("cannot compare more than two mobiles");
        count = 0;
    }
}

function findImagePath(compareBrand,compareElement,compareRam) {
    var compareRamNew = compareRam+" ";
    var compareBrandNew = compareBrand.parentElement.childNodes[1].innerText;
        for (var iter = 0; iter < brands[compareBrandNew].length; iter++) {
            if (brands[compareBrandNew][iter]['model'] == compareElement && brands[compareBrandNew][iter]['ram'] == compareRamNew) {
                mobileNameArray.push(brands[compareBrandNew][iter]);
                return brands[compareBrandNew][iter]['imageUrl'];
            }
        }
    }


var myModal = document.getElementById("modal");
var btn = document.getElementById("compare-btn");
var span = document.getElementsByClassName("close")[0];

function popUpModal() {
    myModal.style.display = "block";

    span.onclick = function () {
        myModal.style.display = "none";
    }
    compareMobileFeature(mobileNameArray[mobileNameArray.length - 2], mobileNameArray[mobileNameArray.length - 1]);
}

var tableTemplate = document.querySelector('.table-template');
var tableRow = document.querySelector('.table-template-row');
var tableColumn = document.querySelector('.table-template-column');
var myDiv = document.querySelector('.modal-content');

function compareMobileFeature(mobile1, mobile2) {
    var tableTemplateNode = tableTemplate.cloneNode(false);
    tableTemplateNode.classList.remove('table-template');

    for (var brandKeys in mobile1) {
        if (brandKeys == 'imageUrl') {
            var tableRowNode = tableRow.cloneNode(false);
            var tableColumnNodeKey = tableColumn.cloneNode(false)
            tableRowNode.appendChild(tableColumnNodeKey);
            var tableColumnNode = tableColumn.cloneNode(true);
            tableColumnNode.innerHTML = "<img src=" + mobile1[brandKeys] + " >";
            tableRowNode.appendChild(tableColumnNode);
            var tableColumnNode1 = tableColumn.cloneNode(true);
            tableColumnNode1.innerHTML = "<img src=" + mobile2[brandKeys] + " >";
            tableRowNode.appendChild(tableColumnNode1);
            tableTemplateNode.appendChild(tableRowNode);
        }
        else {
            var tableRowNode = tableRow.cloneNode(false);
            var tableColumnNodeKey = tableColumn.cloneNode(false);
            tableColumnNodeKey.innerText = brandKeys;
            tableRowNode.appendChild(tableColumnNodeKey);
            var tableColumnNode = tableColumn.cloneNode(false);
            tableColumnNode.innerText = mobile1[brandKeys];
            tableRowNode.appendChild(tableColumnNode);
            var tableColumnNode1 = tableColumn.cloneNode(false);
            tableColumnNode1.innerText = mobile2[brandKeys];
            tableRowNode.appendChild(tableColumnNode1);
            tableTemplateNode.appendChild(tableRowNode);
        }
    }
    myDiv.appendChild(tableTemplateNode);
    mobileNameArray.pop();
    mobileNameArray.pop();
}

function removeMobile(arg1){
}


