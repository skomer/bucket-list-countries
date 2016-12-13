var BucketList = require('./bucketList/bucketList.js');
var Country = require('./bucketList/country.js');
var BListView = require('./views/bucketList_view.js');

window.onload = function() {

    var remoteUrl = 'https://restcountries.eu/rest/v1/all';

    makeRequest(remoteUrl, requestComplete);

    var bList = new BucketList();
    var url = "http://localhost:3000/countries";
    var request = new XMLHttpRequest();
    request.open('GET', url);
    request.onload = function() {
        if (request.status == 200) {
            var bCountries = JSON.parse(request.responseText);

            for(country of bCountries) {
                bList.addCountry(new Country(country));
            }
            var bListView = new BListView(bList);
            bListView.bindEvents();
            bListView.render();
        }
    }
    request.send();
}

function makeRequest(url, callback) {
    var request = new XMLHttpRequest();
    request.open('GET', url);
    request.onload = callback;
    request.send();
}

function requestComplete() {
    console.log("requestComplete");
    if (this.status !== 200) return;
    var jsonString = this.responseText;
    var countries = JSON.parse(jsonString);
    console.log(countries);
    populateList(countries);
}

function populateList(countries) {
    var select = document.getElementById('country-select');
    // select.onchange = function() {
    //     displayItems(countries[this.value]);
    // }
    for (var i = 0; i < countries.length; i++) {
        var option = document.createElement('option');
        option.innerText = countries[i].name;
        option.value = i;
        select.appendChild(option);
    }
}

// function displayItems(country) {
//     var pTag = 
// }















