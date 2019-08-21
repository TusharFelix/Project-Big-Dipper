
var count=0;
var mobileList;
function Compare(compareElement){
    count+=1;
    mobileList.push(compareElement);
    if(count<=2){
        console.log(compareElement);
        if(count==2){
            mobileCompare();
        }
    }
    else{
        alert("Cannot Compare More than 2 Mobiles");
    }
}

function mobileCompare()