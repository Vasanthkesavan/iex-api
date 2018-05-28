const CompanyStats = require('../db').CompanyStats;
const schema = { companyName: 'companyName',
marketcap: 'marketcap',
beta: 'beta',
week52high: 'week52high',
week52low: 'week52low',
week52change: 'week52change',
shortInterest: 'shortInterest',
shortDate: 'shortDate',
dividendRate: 'dividendRate',
dividendYield: 'dividendYield',
exDividendDate: 'exDividendDate',
latestEPS: 'latestEPS',
latestEPSDate: 'latestEPSDate',
sharesOutstanding: 'sharesOutstanding',
float: 'float',
returnOnEquity: 'returnOnEquity',
consensusEPS: 'consensusEPS',
numberOfEstimates: 'numberOfEstimates',
EPSSurpriseDollar: 'EPSSurpriseDollar',
EPSSurprisePercent: 'EPSSurprisePercent',
symbol: 'symbol',
EBITDA: 'EBITDA',
revenue: 'revenue',
grossProfit: 'grossProfit',
cash: 'cash',
debt: 'debt',
ttmEPS: 'ttmEPS',
revenuePerShare: 'revenuePerShare',
revenuePerEmployee: 'revenuePerEmployee',
peRatioHigh: 'peRatioHigh',
peRatioLow: 'peRatioLow',
returnOnAssets: 'returnOnAssets',
returnOnCapital: 'returnOnCapital',
profitMargin: 'profitMargin',
priceToSales: 'priceToSales',
priceToBook: 'priceToBook',
day200MovingAvg: 'day200MovingAvg',
day50MovingAvg: 'day50MovingAvg',
institutionPercent: 'institutionPercent',
insiderPercent: 'insiderPercent',
shortRatio: 'shortRatio',
year5ChangePercent: 'year5ChangePercent',
year2ChangePercent: 'year2ChangePercent',
year1ChangePercent: 'year1ChangePercent',
ytdChangePercent: 'ytdChangePercent',
month6ChangePercent: 'month6ChangePercent',
month3ChangePercent: 'month3ChangePercent',
month1ChangePercent: 'month1ChangePercent',
day5ChangePercent: 'day5ChangePercent',
day30ChangePercent: 'day30ChangePercent' };

module.exports = sendCompanyStats = (req, res) => {
    CompanyStats.find({}, (err, data) => {
        let result = {
            columnDefs: [],
            rowData: []
        };
        let oneData = data[0];
        // console.log(oneData)
        for(let a in oneData) {
            if(schema.hasOwnProperty(a)) {
                result.columnDefs.push({
                    headerName: a.toUpperCase(),
                    field: a
                })
            }
            
        };
        // console.log(result.columnDefs);
        result.rowData = data;
        res.send(result);
    })
}
