var mobile_brand = (Object.keys(brands));
var date_array = [];
mobile_brand.forEach(function (brand) {
    var mobileType = brand;
    brands[mobileType].forEach(function (mobile_spec) {

        date_array.push(mobile_spec["dateOfRelease"]);
    });

});
date_array.sort(function (a, b) {
    var aa = a.split('-').reverse().join(),
        bb = b.split('-').reverse().join();
    return aa < bb ? -1 : (aa > bb ? 1 : 0);
});
var carouselWrap = '';

date_array.reverse();
var date_array = date_array.slice(1, 16);
var count = 0;
var mobile = '', mobile_card = ``;

date_array.forEach(function (task) {
    mobile_brand.forEach(function (brand) {

        var mobileType = brand;
        brands[mobileType].forEach(function (mobile_spec) {
            if (count > 14) {
                var sum = 0;
            }
            else if (task == mobile_spec["dateOfRelease"]) {
                count = count + 1;
                var rating = (parseFloat(mobile_spec["ratings"]));
                ratingColor = (rating < 2.5) ? ('red') : ('green');
                mobile = `<div class="mobile-card recentlanch-card">
                <div class="recentlaunch-mobile-imgWrap">
                    <img src="${mobile_spec["imageUrl"]}"/>
                </div>        
                    <div class="recentlaunch-mobile-spec">
                        <h3 class="recent-lanch-mobile-name">${mobile_spec["model"]}</h3>
                        <ul>
                        <li class="rating" style='color:${ratingColor}'>${mobile_spec['ratings']}</li>
                        <li>${mobile_spec["ram"]}</li>
                        <li>${mobile_spec["dateOfRelease"]}</li>
                        <li>${mobile_spec["price"]}</li>
                        <li>${mobile_spec["processor"]}</li>
                        <li>${mobile_spec["camera"]}</li>
                        </ul>
                    </div>
                </div>`;
                mobile_card = mobile_card.concat(' ', mobile);
                if (count % 3 == 0) {
                    carouselWrap += `<div class="carousel-item mobile-carousel-item">
                    <div class="recentlaunches">
                                ${mobile_card}
                                </div>
                    </div>`;
                    mobile_card = mobile = '';
                }
            }

        });
    });
});
document.getElementsByClassName('recentLaunches-carousel-inner')[0].insertAdjacentHTML('afterbegin', carouselWrap);
