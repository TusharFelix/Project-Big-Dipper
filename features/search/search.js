const search=document.getElementById('search');
var mobileSearchcard = document.querySelector(".mobile-search-card");
var submitButton=document.getElementById('submit-button');
console.log(brands);

const serachMobiles = function(searchText){
    var mobilenames=Object.keys(brands);
    mobileSearchcard.innerHTML="";
    let matches = mobilenames.filter(function(brand) {
        const regex=new RegExp(`^${searchText}`,'gi');
        brands[brand].forEach(function(element) {
            if(searchText.length==0){
                document.querySelector(".brands-section").style.display="block"; 
            }
            else if((element.ram.match(regex))){
                document.querySelector(".brands-section").style.display="none";
                mobileSearchcard.appendChild(createMobilecard(element));
            }
            else if((element.model.match(regex))){
                document.querySelector(".brands-section").style.display="none";
                mobileSearchcard.appendChild(createMobilecard(element));
            }
            else if((brand.match(regex))){
                document.querySelector(".brands-section").style.display="none";
                mobileSearchcard.innerHTML="";
                brands[brand].forEach(function(element){
                mobileSearchcard.appendChild(createMobilecard(element));
                console.log(element);
                });
            }          
        });
    });
}

search.addEventListener('click',function(){serachMobiles(search.value)});
submitButton.addEventListener('click',function(){serachMobiles(search.value)});




