const axios = require('axios');

module.exports = getCompanyList = (req, res) => {
    let result = { companyNames: [], companyIds: [] };
    axios.get('https://api.iextrading.com/1.0/ref-data/symbols')
        .then(response => {
            let data = response.data;
            for(let i = 0; i < data.length; i++) {
                for(let key in data[i]) {
                    if(key === 'name') {
                        result.companyNames.push(data[i][key]);
                        result.companyIds.push({
                            companyTitle: data[i][key],
                            companySymbol: data[i]['symbol']
                        });
                    }
                }
            }
            res.status(200).send(result);
        })
}
