var brandsSection = document.querySelector(".brands-section");
var brandTemplate = document.querySelector(".brand-template");
var mobileTemplate = document.querySelector(".mobile-card-template");

var brands = {
  Samsung: [
    {
      model: "Note 10 Plus",
      ram: 12,
      price: 90000
    },
    {
      model: "Note 9",
      ram: 8,
      price: 70000
    },
    {
      model: "Galaxy S10 Plus",
      ram: 8,
      price: 65000
    },
    {
      model: "Galaxy S10",
      ram: 8,
      price: 60000
    },
    {
      model: "Galaxy S9 Plus",
      ram: 6,
      price: 65000
    },
    {
      model: "Note 10 Plus",
      ram: 12,
      price: 90000
    },
    {
      model: "Note 9",
      ram: 8,
      price: 70000
    },
    {
      model: "Galaxy S10 Plus",
      ram: 8,
      price: 65000
    },
    {
      model: "Galaxy S10",
      ram: 8,
      price: 60000
    },
    {
      model: "Galaxy S9 Plus",
      ram: 6,
      price: 65000
    },
    {
      model: "Note 10 Plus",
      ram: 12,
      price: 90000
    },
    {
      model: "Note 9",
      ram: 8,
      price: 70000
    },
    {
      model: "Galaxy S10 Plus",
      ram: 8,
      price: 65000
    },
    {
      model: "Galaxy S10",
      ram: 8,
      price: 60000
    },
    {
      model: "Galaxy S9 Plus",
      ram: 6,
      price: 65000
    }
  ],
  Apple: [
    {
      model: "iphone Xr",
      ram: 6,
      price: 90000
    },
    {
      model: "iphone Xs",
      ram: 6,
      price: 85000
    },
    {
      model: "iphone 8 plus",
      ram: 4,
      price: 70000
    },
    {
      model: "iphone 8",
      ram: 3,
      price: 65000
    },
    {
      model: "iphone Xr",
      ram: 6,
      price: 90000
    },
    {
      model: "iphone Xs",
      ram: 6,
      price: 85000
    },
    {
      model: "iphone 8 plus",
      ram: 4,
      price: 70000
    },
    {
      model: "iphone 8",
      ram: 3,
      price: 65000
    },
    {
      model: "iphone Xr",
      ram: 6,
      price: 90000
    },
    {
      model: "iphone Xs",
      ram: 6,
      price: 85000
    },
    {
      model: "iphone 8 plus",
      ram: 4,
      price: 70000
    },
    {
      model: "iphone 8",
      ram: 3,
      price: 65000
    }
  ],
  Oneplus: [
    {
      model: "OnePlus 7 Pro",
      ram: 12,
      price: 53000
    },
    {
      model: "OnePlus 7",
      ram: 8,
      price: 40000
    },
    {
      model: "OnePlus 6 Pro",
      ram: 8,
      price: 40000
    },
    {
      model: "OnePlus 6",
      ram: 6,
      price: 35000
    },
    {
      model: "OnePlus 7 Pro",
      ram: 12,
      price: 53000
    },
    {
      model: "OnePlus 7",
      ram: 8,
      price: 40000
    },
    {
      model: "OnePlus 6 Pro",
      ram: 8,
      price: 40000
    },
    {
      model: "OnePlus 6",
      ram: 6,
      price: 35000
    },
    {
      model: "OnePlus 7 Pro",
      ram: 12,
      price: 53000
    },
    {
      model: "OnePlus 7",
      ram: 8,
      price: 40000
    },
    {
      model: "OnePlus 6 Pro",
      ram: 8,
      price: 40000
    },
    {
      model: "OnePlus 6",
      ram: 6,
      price: 35000
    }
  ]
};

function renderApp(brands) {
  for (var brand in brands) {
    createMobileBrand(brand, brands[brand]);
  }
}

function createMobileBrand(brandTitle, brandModels) {
  var newBrand = brandTemplate.cloneNode(true);
  var newBrandModelsContainer = newBrand.querySelector(".brand-models");
  newBrand.classList.remove("brand-template");
  newBrand.querySelector(".brand-title").innerText = brandTitle;
  brandModels.forEach(function(mobile) {
    newBrandModelsContainer.appendChild(createMobilecard(mobile));
  });
  brandsSection.appendChild(newBrand);
}

function createMobilecard(model) {
  var mobile = mobileTemplate.cloneNode(true);
  mobile.classList.remove("mobile-card-template");
  mobile.querySelector(".mobile-name").innerText = model["model"];
  mobile.querySelector(".mobile-ram").innerText = model["ram"];
  mobile.querySelector(".mobile-price").innerText = model["price"];
  return mobile;
}

(function() {
  renderApp(brands);
})();
