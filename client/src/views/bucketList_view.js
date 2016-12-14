//var country = require('../bucketList/country.js');

var BListView = function(bList) {
    this.bList = bList;
};

BListView.prototype = {

  bindEvents: function(){
    var form = document.getElementById('add-country');
    form.onsubmit = function(event) {
      event.preventDefault();

      var country = {
        name: event.target.name.value
      }
      this.bList.addCountry(new Country(country));
      // this.render();

      this.saveCountry(country);
    }.bind(this);
  },

  saveCountry: function(country) {
    var url = 'http://localhost:3000/countries';
    var request = new XMLHttpRequest();
    request.open('POST', url);
    request.setRequestHeader;
  },

  makeRequest: function(url, callback) {
    var request = new XMLHttpRequest();
    request.open('GET', url);
    request.onload = callback;
    request.send();
  },

  requestComplete: function() {
      console.log("requestComplete");
      if (this.status !== 200) return;
      var jsonString = this.responseText;
      var countries = JSON.parse(jsonString);
      // populateList(countries);
  },

  render: function() {
    console.log("render");
    },

  populateList: function(countries) {
    console.log("populateList");
    var select = document.getElementById('country-select');
    // select.onchange = function() {
    //     displayItems(countries[this.value]);
    // }
    for (var i = 0; i < countries.length; i++) {
        var option = document.createElement('option');
        option.innerText = countries[i].name;
        option.value = i;
        select.appendChild(option);
    };
  }

    // function displayItems(country) {
    //     var pTag = 
    // }




};

module.exports = BListView;














