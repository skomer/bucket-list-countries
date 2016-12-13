var country = require('../bucketList/country.js');

var BListView = function(bList) {
    this.bList = bList;
}

BListView.prototype = {

  bindEvents: function(){
    var form = document.getElementById('add-country');
    form.onsubmit = function(event) {
      event.preventDefault();

      var country = {
        name: event.target.name.value
      }
      this.bList.addCountry(new Country(country));
      this.render();

      this.saveCountry(country);
    }.bind(this);
  },

  saveCountry: function(country) {
    var url = 'http://localhost:3000/countries';
    var request = new XMLHttpRequest();
    request.open('POST', url);
    request.setRequestHeader
  },

  render: function() {
    console.log("render");
    // var select = document.getElementById('country-select');
    // select.onchange = function() {
    //     displayCountry()
    // }




  }




}

module.exports = BListView;














