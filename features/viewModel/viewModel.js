var mob_img = document.getElementById("mobile-img");
var mobile_desc = document.getElementsByClassName("model-view-data")[0];
var mobile_spec = document.getElementsByClassName("model-view-spec")[0];
let cardElements = document.getElementsByClassName("mobile-card");
var modal = document.getElementById("myModal");
var close_button = document.getElementById("close");
var arr_len = cardElements.length;
for (let itr = 0; itr < arr_len; itr++) {
    let btnEle = cardElements[itr];
    sourceElement = btnEle.querySelector(".view-btn");
    sourceElement.addEventListener("click", bindClick(btnEle));
}
function bindClick(btnEle) {
    return function() { 
        viewModal();
        var mobile_name = btnEle.getElementsByClassName("mobile-name")[0].innerText;
        var mobile_ram = btnEle.getElementsByClassName("mobile-ram")[0].innerText;
        var mobile_price = btnEle.getElementsByClassName("mobile-price")[0].innerText;
        var brand=btnEle.parentElement.parentElement.getElementsByClassName("brand-title")[0].innerText;
        mobileObj(brands[brand],mobile_name,mobile_ram,mobile_price);
    
};
}
function viewModal(){     //display model
    modal.style.display = "block";
    close_button.setAttribute('autofocus','true');
    document.body.style.overflow = 'hidden';
}
close_button.onclick = hideModal;
window.onclick = function(event) {
    if (event.target == modal) {
        hideModal();
    }
}
function hideModal(){
    modal.style.display = "none";
    close_button.removeAttribute('autofocus');
    document.body.style.overflow = 'auto';
}
function mobileObj(brandObj,mobileName,mobile_ram,mobile_price){
    brandObj.forEach(function(element){
        element.ram = element.ram.trim();   
        if((element.model==mobileName)&&(element.ram==mobile_ram)&&(element.price==mobile_price)){
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



