var carouselWrap = '';
var mobile = '', mobile_card = "";
var a=Object.values(brands);
var ba=[].concat.apply([],a);
ba.sort(function (a, b) {
        var aa = a["dateOfRelease"].split('-').reverse().join(),
            bb = b["dateOfRelease"].split('-').reverse().join();
        return aa < bb ? 1 : (aa > bb ? -1 : 0);
    });
var v=ba.slice(1, 16);
var count=0;
v.forEach(function (model) {
    count = count + 1;
        var rating = (parseFloat(model["ratings"]));
        var ratingColor = (rating < 2.5) ? ('red') : ('green');
        mobile = '<div class="mobile-card recentlanch-card">\
            <div class="recentlaunch-mobile-imgWrap">\
                <img src="'+model["imageUrl"]+'"/>\
            </div>        \
                <div class="recentlaunch-mobile-spec">\
                    <h3 class="recent-lanch-mobile-name">'+model["model"]+'</h3>\
                    <ul>\
                    <li class="rating" style=color:'+ratingColor+'>'+model['ratings']+'</li>\
                    <li>'+model["ram"]+'</li>\
                    <li>'+model["dateOfRelease"]+'</li>\
                    <li>'+model["price"]+'</li>\
                    <li>'+model["processor"]+'</li>\
                    <li>'+model["camera"]+'</li>\
                    </ul>\
                </div>\
            </div>';
        mobile_card = mobile_card.concat(' ', mobile);
        if (count % 3 == 0) {
            carouselWrap += '<div class="carousel-item mobile-carousel-item">\
                <div class="recentlaunches">\
                            '+mobile_card+'\
                            </div>\
                </div>';
            mobile_card = mobile = '';

            return mobile;
        }            
        });
        document.getElementsByClassName('recentLaunches-carousel-inner')[0].insertAdjacentHTML('afterbegin', carouselWrap);