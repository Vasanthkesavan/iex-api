const axios = require('axios');

module.exports = getCompanyInfo = (req, res) => {
    let companyName = req.body.params.companyName;
    axios.get(`https://api.iextrading.com/1.0/stock/${companyName}/company`)
        .then(response => {
            res.send(response.data);
        })
        .catch(error => {
            console.error(error);
        })
}
