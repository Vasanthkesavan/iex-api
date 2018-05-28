const axios = require('axios');

module.exports = getSymbols = (req, res) => {
    let result = { columnDefs: [], rowData: [] };

    axios.get('https://api.iextrading.com/1.0/ref-data/symbols')
        .then(response => {
            let data = response.data;
            let oneData = data[0];
            for(let key in oneData) {
                result.columnDefs.push({
                    headerName: key.toUpperCase(),
                    field: key
                })
            };
            result.rowData = data;
            res.status(200).send(oneData); 
        })
        .catch(error => {
            console.error(error);
        })
}
