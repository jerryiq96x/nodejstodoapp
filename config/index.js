var configValues = require('./config');

module.exports = {
    getDbConnectionString: function(){
        return `mongodb://${ configValues.username }:${ configValues.password }@ds141796.mlab.com:41796/nodejsfirstdb`;
    }
}