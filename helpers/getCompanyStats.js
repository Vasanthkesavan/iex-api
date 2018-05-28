const axios = require('axios');
const CompanyStats = require('../db').CompanyStats;

module.exports = getCompanyStats = (req, res) => {
    // axios.get('http://localhost:3000/api/getStatsURL')
    //     .then(response => {
    //         let length = response.data.length;
    //         function saveToDB(x) {
    //             var y = x + 99;
    //             for(let i = x; i <= y; i++) {
    //                 axios.get(response.data[i])
    //                     .then(cData => {
    //                         let data = cData.data.stats;
    //                         let stats = new CompanyStats(data);
    //                         stats.save();
    //                     })
    //                     .catch(error => {
    //                         console.error(error);
    //                     })
    //             }
    //             x = y;
    //             if(x <= length) {
    //                 setTimeout(function() { saveToDB(x) }, 5000);
    //             } else {
    //                 console.log('Batch Job Ended!');
    //                 return;
    //             }
    //         }
    //         saveToDB(1);
    //         res.send('Saved Successfully');
    //     })
    //     .catch(error => {
    //         console.error(error)
    //     })
}
