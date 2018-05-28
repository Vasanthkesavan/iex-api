const axios = require('axios');

module.exports = getStatsURL = (req, res) => {
    let data = [];
    axios.get('https://api.iextrading.com/1.0/ref-data/symbols')
        .then(response => {
            response.data.forEach((company) => {
                data.push(`https://api.iextrading.com/1.0/stock/${company.symbol}/batch?types=stats`);
            })
                res.send(data);
        })
}

