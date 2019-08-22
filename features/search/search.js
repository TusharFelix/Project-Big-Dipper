const search=document.getElementById('search');
var mobileSearchcard = document.querySelector(".mobile-search-card");
var submitButton=document.getElementById('submit-button');
console.log(brands);

const serachMobiles = function(searchText){
    var mobilenames=Object.keys(brands);
    mobileSearchcard.innerHTML="";
    let matches = mobilenames.filter(function(brand) {
        searchText=searchText.replace(" ","");
        const regex=new RegExp(`^${searchText}`,'gi');
        brands[brand].forEach(function(element) {
            var modelName=element.model.replace(" ","");
            if(searchText.length==0){
                document.querySelector(".brands-section").style.display="block"; 
            }
            else if((element.ram.match(regex))){
                document.querySelector(".brands-section").style.display="none";
                mobileSearchcard.appendChild(createMobilecard(element));
            }
            else if((modelName.match(regex))){
                console.log(modelName);
                console.log(regex);
                document.querySelector(".brands-section").style.display="none";
                mobileSearchcard.appendChild(createMobilecard(element));
                //console.log(element);
            }
            else if((brand.match(regex))){
                document.querySelector(".brands-section").style.display="none";
                mobileSearchcard.innerHTML="";
                brands[brand].forEach(function(element){
                mobileSearchcard.appendChild(createMobilecard(element));
                // console.log(element);
                });
            }
            else{
                document.querySelector(".brands-section").style.display="none";
            }         
        });
    });
}
search.addEventListener('click',function(){serachMobiles(search.value)});
submitButton.addEventListener('click',function(){serachMobiles(search.value)});
search.addEventListener('keyup',function(event){
    // console.log(event);
    if(event.keyCode === 13){
        serachMobiles(search.value);
    }
});



