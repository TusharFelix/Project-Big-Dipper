var inputElements = document.querySelectorAll("input.mycheck");
// console.log(inputElements);
for (let i = 0; i < Array.from(inputElements).length; i++) {
  inputElements[i].addEventListener("click", e => generateconditions(e));
}
document.querySelector(".filter-submit").addEventListener("click", e => {
  return filterMobiles();
});

var brand = Object.keys(brands);
var length = Object.keys(brands).length;
var ram = [];
var j = 0;
var filterConditions = [
  {
    filterType: "PRICE",
    applicable: false,
    selected: []
  },
  {
    filterType: "RAM",
    applicable: false,
    selected: []
  },
  {
    filterType: "BRAND",
    applicable: false,
    selected: []
  }
];
var filteredArray = [];
var selectedFilter = null;
for (var i = 0; i < length; i++) {
  brands[brand[i]].forEach(function (item) {
    ram[j++] = item["ram"];
  });
}
ram.sort();
// console.log(ram);
var val = [...new Set(ram)];
// console.log(val);
// console.log(brand);

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

submitbutton.onclick = function () {
  modal.style.display = "none";
};
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
clearbutton.onclick=function()
{
  var items = document.querySelectorAll(".filter-check");
        for (var i = 0; i < items.length; i++) {
            if (items[i].type == 'checkbox')
                items[i].checked = false;
        }
}
function openTab(click, openTab) {
  var i, content, link;
  selectedFilter = openTab.toUpperCase();
  // console.log(selectedFilter);
  content = document.getElementsByClassName("content");
  for (i = 0; i < content.length; i++) {
    content[i].style.display = "none";
  }
  // links = document.getElementsByClassName("links");
  // for (i = 0; i < links.length; i++) {
  //   links[i].className = links[i].className.replace(" active", "");
  // }
  document.getElementById(openTab).style.display = "block";
  // click.currentTarget.className += " active";
  document.getElementById("submitbutton").style.display = "block";
  document.getElementById("clearbutton").style.display="block";
  document.getElementById("displaytext").style.display = "none";

}
function generateconditions(e) {
  // var currentIndex = null;
  // currentIndex = filterConditions.findIndex(function(ele) {
  //   return ele.filterType === selectedFilter;
  // });
  // // console.log(selectedEle);
  // if (e.target.checked) {
  //   filterConditions[currentIndex].selected.push(selectedEle);
  //   filterConditions[currentIndex].applicable = true;
  //   console.log(filterConditions);
  // } else {
  //   var removeIndex = filterConditions[currentIndex].selected.findIndex(
  //     function(ele) {
  //       return ele === selectedEle;
  //     }
  //   );
  //   filterConditions[currentIndex].selected.splice(removeIndex, 1);
  //   if (!filterConditions[currentIndex].selected.length) {
  //     filterConditions[currentIndex].applicable = false;
  //   }
  //   console.log(filterConditions);
  // }
}
var myArray = val;
var ramArray = [];
for (let i = 0; i < myArray.length; i++) {
  var a = myArray[i].split(" ");
  ramArray.push({
    type: parseInt(a[0]),
    storage: a[1],
    test: a[2]
  });
}
var resultArray = ramArray.sort(function (a, b) {
  return b.type < a.type ? -1 : 1;
});
var filteredRam = [];
for (let i = 0; i < resultArray.length; i++) {
  filteredRam[i] =
    resultArray[i].type +
    " " +
    resultArray[i].storage +
    " " +
    resultArray[i].test;
}

var brandFiltertemplate = document.querySelector(".brand-filter-temp");
var brandContainer = document.querySelector("#brand-container");
var brandfilterchecktemplate = document.querySelector(
  ".brand-filter-check-temp"
);
var brandWrapper = document.querySelector("#brand");
var brandfiltercontainertemplate = document.querySelector(
  ".brand-container-temp"
);
for (i = 0; i < brand.length; i++) {
  var brandfiltercontainer = brandfiltercontainertemplate.cloneNode(true);
  // var brandfiltercheck = brandfilterchecktemplate.cloneNode(true);
  // var brandFilter=brandFiltertemplate.cloneNode(true);
  brandfiltercontainer.classList.remove("brand-container-temp");
  var brandfiltercheck = brandfiltercontainer.querySelector("input");
  var brandFilter = brandfiltercontainer.querySelector("label");
  brandfiltercheck.classList.remove("brand-filter-check-temp");
  brandFilter.classList.remove("brand-filter-temp");
  // console.log(brandFilter);
  brandfiltercheck.innerText = brand[i];
  brandfiltercheck.setAttribute("id", "brand-id-" + i);
  brandFilter.innerText = brand[i];
  brandFilter.setAttribute("for", "brand-id-" + i);
  brandWrapper.appendChild(brandfiltercontainer);
  // brandContainer.appendChild(brandFilter);
}

// console.log(filteredRam);
var ramFiltertemplate = document.querySelector(".ram-filter-temp");
var ramContainer = document.querySelector("#ram-container");
var ramWrapper = document.querySelector("#ram");
var ramfilterchecktemplate = document.querySelector(".ram-filter-check-temp");
var ramfiltercontainertemplate = document.querySelector(".ram-container-temp");
for (i = 0; i < filteredRam.length; i++) {
  var ramfiltercontainer = ramfiltercontainertemplate.cloneNode(true);
  // var ramfiltercheck = ramfilterchecktemplate.cloneNode(true);
  // var ramFilter=ramFiltertemplate.cloneNode(true);
  ramfiltercontainer.classList.remove("ram-container-temp");
  var ramfiltercheck = ramfiltercontainer.querySelector("input");
  var ramFilter = ramfiltercontainer.querySelector("label");
  ramfiltercheck.classList.remove("ram-filter-check-temp");
  ramFilter.classList.remove("ram-filter-temp");
  // console.log(ramFilter);
  ramfiltercheck.innerText = filteredRam[i];
  ramfiltercheck.setAttribute("id", "ram-id-" + i);
  ramFilter.innerText = filteredRam[i];
  ramFilter.setAttribute("for", "ram-id-" + i);
  ramWrapper.appendChild(ramfiltercontainer);
  // ramContainer.appendChild(ramFilter);
}

const filterMobiles = () => {
  // var mobileBrands = Object.keys(brands);
  // let allMobiles = [];
  // for (let itr = 0; itr < mobileBrands.length; itr++) {
  //   for (let i = 0; i < brands[mobileBrands[itr]].length; i++) {
  //     brands[mobileBrands[itr]][i].mobileType = mobileBrands[itr];
  //     // console.log(mobileBrands[itr]);
  //   }
  //   allMobiles = [...allMobiles, ...brands[mobileBrands[itr]]];
  // }
  // for (let i = 0; i < filterConditions.length; i++) {
  //   if (filterConditions[i].applicable === true) {
  //     if (filteredArray.length === 0) {
  //       for (let mobile = 0; mobile < allMobiles.length; mobile++) {
  //         var subjectedText =
  //           allMobiles[mobile].mobileType.charAt(0).toUpperCase() +
  //           allMobiles[mobile].mobileType.substr(1).toLowerCase();
  //         if (filterConditions[i].selected.includes(subjectedText)) {
  //           filteredArray.push(allMobiles[mobile]);
  //         }
  //       }
  //     } else {
  //       filteredArray = [];
  //       for (let mobile = 0; mobile < allMobiles.length; mobile++) {
  //         var subjectedText =
  //           allMobiles[mobile].mobileType.charAt(0).toUpperCase() +
  //           allMobiles[mobile].mobileType.substr(1).toLowerCase();
  //         if (filterConditions[i].selected.includes(subjectedText)) {
  //           filteredArray.push(allMobiles[mobile]);
  //         }
  //       }
  //     }
  //   }
  // }
  // console.log(filteredArray);
  // createMobileBrand("Samsung",filteredArray);
  filterBrand();

  // var selectedEle = e.target.nextElementSibling.innerText;
  // filerteredBrandsObj[selectedEle] = brands[selectedEle];
};
var filteredBrandsObj = {};

function filterBrand() {
  filerteredBrandsObj = {};
  var selectedBrandEle = document.querySelectorAll(".brand-container");
  var checkedBrands = extractCheckedValues(selectedBrandEle);
  if (checkedBrands.length == 0) {
    filerteredBrandsObj = Object.assign({}, brands);
  }
  checkedBrands.forEach(function (mobileName) {
    filerteredBrandsObj[mobileName] = brands[mobileName];
  });
  applyFilter(filerteredBrandsObj);
}

function applyFilter(filteredBrands) {
  var selectedBrandEle = document.querySelectorAll(".ram-container");
  var selectedPriceEle = document.querySelectorAll(".check-box-container");
  var newBrandObj = filterMobileProperties(
    selectedBrandEle,
    filteredBrands,
    "ram"
  );
  newBrandObj = filterMobileProperties(selectedPriceEle, newBrandObj, "price");
  for (var brand in newBrandObj) {
    if (newBrandObj[brand].length == 0) {
      delete newBrandObj[brand];
    }
  }
  removeBrand();
  renderApp(newBrandObj);
  // renderApp(filterMobileProperties(selectedBrandEle, filteredBrands, "ram"));

  // var selectedRam = [];
  // Array.from(selectedBrandEle).forEach(function(ele, ind) {
  //   if(ind != 0) {
  //     if(ele.querySelector(".ram-filter-check").checked) {
  //       selectedRam.push(ele.querySelector('.ram-filter').innerText);
  //     }
  //   }
  // });
  // var NewFilteredArray = [];
  // for(var mobile in filteredBrands) {
  //   NewFilteredArray[mobile] = filteredBrands[mobile].filter(filterMobilesUsingSpecs("ram", selectedRam));
  // }
  // renderApp(NewFilteredArray)
}

function filterMobilesUsingSpecs(type, checkedValues) {
  return function (a) {
    if (type == "price") {
      for (var i = 0; i < checkedValues.length; i++) {
        var priceamount = checkedValues[i];
        priceamount = priceamount.substr(1);
        var splitvalues = priceamount.split("-");
        var min = parseInt(splitvalues[0]);
        var max = parseInt(splitvalues[1]);
      }
      // console.log(min, max, a[type]);
      if (a[type] > min && a[type] < max) {
        return 1;
      } else {
        return 0;
      }
    } else {
      return checkedValues.includes(a[type].trim());
    }
  };
}

function filterMobileProperties(propertyEle, brandObj, filteringType) {
  var checkedValues = extractCheckedValues(propertyEle);
  if (checkedValues.length != 0) {
    var NewFilteredArray = [];
    for (var mobile in brandObj) {
      NewFilteredArray[mobile] = brandObj[mobile].filter(
        filterMobilesUsingSpecs(filteringType, checkedValues)
      );
    }
    return NewFilteredArray;
  }
  return brandObj;

}

function removeBrand() {
  var removeElement = document.querySelectorAll('.brand-card')
  removeElement.forEach(function (item) {
    item.remove();
  });
}

function extractCheckedValues(propertyEle) {
  var checkedValues = [];
  Array.from(propertyEle).forEach(function (ele, ind) {
    if (ind != 0) {
      if (ele.querySelector(".filter-check").checked) {
        checkedValues.push(ele.querySelector(".filter-label").innerText);
      }
    }
  });
  return checkedValues;
}
