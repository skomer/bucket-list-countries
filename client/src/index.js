var BucketList = require('./bucketList/bucketList.js');
var Country = require('./bucketList/country.js');
var BListView = require('./views/bucketList_view.js');

window.onload = function() {
    var bList = new BucketList();
    var bListView = new BListView(bList);

    var remoteUrl = 'https://restcountries.eu/rest/v1/all';

    bListView.makeRequest(remoteUrl, bListView.requestComplete);

    // this is the bit that gets the bucket list from mongodb
    var url = "http://localhost:3000/countries";
    var request = new XMLHttpRequest();
    request.open('GET', url);
    request.onload = function() {
        if (request.status == 200) {
            var bCountries = JSON.parse(request.responseText);

            for(country of bCountries) {
                bList.addCountry(new Country(country));
            }
            bListView.bindEvents();
            bListView.render();
        }
    }
    request.send();
}















