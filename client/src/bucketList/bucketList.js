var BucketList = function() {
    this.bucketList = [];
}

BucketList.prototype = {
    addCountry: function(country) {
        this.bucketList.push(country);
    }
}

module.exports = BucketList;