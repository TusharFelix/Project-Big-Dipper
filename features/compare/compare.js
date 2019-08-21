
var count = 0;
var mobileNameArray = [];
var imageArray = [document.getElementById('mobile-one'), document.getElementById('mobile-two')];
var mobileName = [document.getElementById('mobile-name-one'), document.getElementById('mobile-name-two')]
var compareButton = document.getElementById('compare-btn');

function Compare(compareElement) {
    count++;
    console.log(mobileNameArray);
    if (count <= 2) {
       // mobileNameArray.push(compareElement);
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
                mobileNameArray.push(brands[brandType][iter]);
                return brands[brandType][iter]['imageUrl'];
            }

        }
    }
}

var myModal = document.getElementById("modal");
var btn = document.getElementById("compare-btn");
var span = document.getElementsByClassName("close")[0];

function popUpModal() {
  myModal.style.display = "block";

  span.onclick = function() {
    modal.style.display = "none";
  }

//   console.log(mobileNameArray[mobileNameArray.length-2],"this is the first value");
//   console.log(mobileNameArray[mobileNameArray.length-1],"this is the second argument");
   compareMobileFeature(mobileNameArray[mobileNameArray.length-2],mobileNameArray[mobileNameArray.length-1]);
}



var tableTemplate = document.querySelector('.table-template');
var tableRow = document.querySelector('.table-template-row');

var tableColumn = document.querySelector('.table-template-column');

var myDiv = document.querySelector('.modal-content');

function compareMobileFeature(mobile1,mobile2){
var tableTemplateNode = tableTemplate.cloneNode(false);
tableTemplateNode.classList.remove('table-template');
for (var aa in mobile1){
if (aa=='imageUrl'){
var tableRowNode = tableRow.cloneNode(false);
console.log(tableRowNode);
var tableColumnNodeKey=tableColumn.cloneNode(false);
tableColumnNodeKey.innerText='Image';
tableRowNode.appendChild(tableColumnNodeKey);
var tableColumnNode=tableColumn.cloneNode(true);
tableColumnNode.innerHTML= "<img src="+mobile1[aa]+" >";
tableRowNode.appendChild(tableColumnNode);
var tableColumnNode1=tableColumn.cloneNode(true);
tableColumnNode1.innerHTML= "<img src="+mobile2[aa]+" >";
tableRowNode.appendChild(tableColumnNode1);
tableTemplateNode.appendChild(tableRowNode);
}
else{
var tableRowNode = tableRow.cloneNode(false);
console.log(tableRowNode);
var tableColumnNodeKey=tableColumn.cloneNode(false);
tableColumnNodeKey.innerText=aa;
tableRowNode.appendChild(tableColumnNodeKey);
var tableColumnNode=tableColumn.cloneNode(false);
tableColumnNode.innerText=mobile1[aa];
tableRowNode.appendChild(tableColumnNode);
var tableColumnNode1=tableColumn.cloneNode(false);
console.log(tableColumnNode);
tableColumnNode1.innerText=mobile2[aa];
tableRowNode.appendChild(tableColumnNode1);
tableTemplateNode.appendChild(tableRowNode);
}
}
myDiv.appendChild(tableTemplateNode);
}


  
