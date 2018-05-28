const Layout = require('../db').Layout;

module.exports = currentState = (req, res) => {
    Layout.find({}).exec(function(err, data) {
        if(!data) {
            res.send('There is no data here')
        } else {
            res.send(data);
        }
    })
}
