    var mob_img = document.getElementById("mobile-img");
    var mobile_desc = document.getElementsByClassName("model-view-data")[0];
    var mobile_spec = document.getElementsByClassName("model-view-spec")[0];
    let cardElements = document.getElementsByClassName("mobile-card");
    var arr_len = Array.from(cardElements).length;
    for (let itr = 0; itr < arr_len; itr++) {
        let btnEle = cardElements[itr];
        sourceElement = btnEle.querySelector(".view-btn");
        sourceElement.addEventListener("click", bindClick(btnEle));
    }
    function bindClick(btnEle) {
        return function() { 
            viewModel();
            var mobile_name = btnEle.getElementsByClassName("mobile-name")[0].innerText;
            var mobile_ram = btnEle.getElementsByClassName("mobile-ram")[0].innerText;
            for(var brand in brands){
            mobileObj(brands[brand],mobile_name,mobile_ram);
        }
    };
  }
    function viewModel(){     //display model
        var modal = document.getElementById("myModal");
        var close_button = document.getElementById("close");
        modal.style.display = "block";
        close_button.onclick = function() {
        modal.style.display = "none";
        }
        window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
        }
    }
    function mobileObj(brandObj,mobileName,mobile_ram){
        brandObj.forEach(function(element){
            element.ram = element.ram.trim();   
            if((element.model==mobileName)&&(element.ram==mobile_ram)){
                modelData(element);
            }  
        });
    }
    function modelData(mobileObject){
        mob_img.setAttribute("src", mobileObject.imageUrl);
        mobile_desc.querySelector("#mobile-model").innerText = mobileObject.model;
        mobile_desc.querySelector("#mobile-Ram").innerText = mobileObject.ram;
        mobile_desc.querySelector("#mobile-Rom").innerText = mobileObject.rom;
        mobile_desc.querySelector("#mobile-camera").innerText = mobileObject.camera;
        mobile_desc.querySelector("#mobile-battery").innerText = mobileObject.battery;
        mobile_desc.querySelector("#mobile-processor").innerText = mobileObject.processor;
        mobile_desc.querySelector("#mobile-screensize").innerText = mobileObject.screenSize;
        mobile_desc.querySelector("#mobile-simType").innerText = mobileObject.simType;
        mobile_desc.querySelector("#mobile-otgcompatible").innerText ="OTG : " + mobileObject.otg_Compatible;

        //specification
        mobile_spec.querySelector("#mobile-price").innerText = "PRICE : Rs."+ mobileObject.price;
        mobile_spec.querySelector("#mobile-Rating").innerText = "RATINGS : "+mobileObject.ratings;
        mobile_spec.querySelector("#mobile-ModelNo").innerText = "MODELNUMBER : "+mobileObject.modelNumber;
        mobile_spec.querySelector("#mobile-color").innerText = "COLOR : "+mobileObject.color;
    }


  
