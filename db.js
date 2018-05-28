const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const db = mongoose.connection;

mongoose.connect('mongodb://localhost/iex');

db.once('open', () => console.log('Connected to database'));
db.on('error', (error) => console.error(error));

const layoutSchema = new Schema({
    positionsTab: [{
        aggFunc: String,
        colId: String,
        hide: Boolean,
        pinned: Boolean,
        pivotIndex: Number,
        rowGroupIndex: Number,
        width: Number
    }]
});

const CompanyStatsSchema = new Schema({
    "companyName": { type: { preference1: String, preference2: Number }, default: null },
    "marketcap":{ type: { preference1: String, preference2: Number }, default: null },
    "beta":{ type: { preference1: String, preference2: Number }, default: null },
    "week52high":{ type: { preference1: String, preference2: Number }, default: null },
    "week52low":{ type: { preference1: String, preference2: Number }, default: null },
    "week52change":{ type: { preference1: String, preference2: Number }, default: null },
    "shortInterest":{ type: { preference1: String, preference2: Number }, default: null },
    "shortDate": { type: { preference1: String, preference2: Number }, default: null },
    "dividendRate":{ type: { preference1: String, preference2: Number }, default: null },
    "dividendYield":{ type: { preference1: String, preference2: Number }, default: null },
    "exDividendDate": { type: { preference1: String, preference2: Number }, default: null },
    "latestEPS":{ type: { preference1: String, preference2: Number }, default: null },
    "latestEPSDate": { type: { preference1: String, preference2: Number }, default: null },
    "sharesOutstanding":{ type: { preference1: String, preference2: Number }, default: null },
    "float":{ type: { preference1: String, preference2: Number }, default: null },
    "returnOnEquity":{ type: { preference1: String, preference2: Number }, default: null },
    "consensusEPS":{ type: { preference1: String, preference2: Number }, default: null },
    "numberOfEstimates":{ type: { preference1: String, preference2: Number }, default: null },
    "EPSSurpriseDollar":{ type: { preference1: String, preference2: Number }, default: null },
    "EPSSurprisePercent":{ type: { preference1: String, preference2: Number }, default: null },
    "symbol":{ type: { preference1: String, preference2: Number }, default: null },
    "EBITDA":{ type: { preference1: String, preference2: Number }, default: null },
    "revenue":{ type: { preference1: String, preference2: Number }, default: null },
    "grossProfit":{ type: { preference1: String, preference2: Number }, default: null },
    "cash":{ type: { preference1: String, preference2: Number }, default: null },
    "debt":{ type: { preference1: String, preference2: Number }, default: null },
    "ttmEPS":{ type: { preference1: String, preference2: Number }, default: null },
    "revenuePerShare":{ type: { preference1: String, preference2: Number }, default: null },
    "revenuePerEmployee":{ type: { preference1: String, preference2: Number }, default: null },
    "peRatioHigh":{ type: { preference1: String, preference2: Number }, default: null },
    "peRatioLow":{ type: { preference1: String, preference2: Number }, default: null },
    "returnOnAssets":{ type: { preference1: String, preference2: Number }, default: null },
    "returnOnCapital":{ type: { preference1: String, preference2: Number }, default: null },
    "profitMargin":{ type: { preference1: String, preference2: Number }, default: null },
    "priceToSales":{ type: { preference1: String, preference2: Number }, default: null },
    "priceToBook":{ type: { preference1: String, preference2: Number }, default: null },
    "day200MovingAvg":{ type: { preference1: String, preference2: Number }, default: null },
    "day50MovingAvg":{ type: { preference1: String, preference2: Number }, default: null },
    "institutionPercent":{ type: { preference1: String, preference2: Number }, default: null },
    "insiderPercent":{ type: { preference1: String, preference2: Number }, default: null },
    "shortRatio":{ type: { preference1: String, preference2: Number }, default: null },
    "year5ChangePercent":{ type: { preference1: String, preference2: Number }, default: null },
    "year2ChangePercent":{ type: { preference1: String, preference2: Number }, default: null },
    "year1ChangePercent":{ type: { preference1: String, preference2: Number }, default: null },
    "ytdChangePercent":{ type: { preference1: String, preference2: Number }, default: null },
    "month6ChangePercent":{ type: { preference1: String, preference2: Number }, default: null },
    "month3ChangePercent":{ type: { preference1: String, preference2: Number }, default: null },
    "month1ChangePercent":{ type: { preference1: String, preference2: Number }, default: null },
    "day5ChangePercent":{ type: { preference1: String, preference2: Number }, default: null },
    "day30ChangePercent":{ type: { preference1: String, preference2: Number }, default: null }
});

const CompanyStats = mongoose.model('CompanyStats', CompanyStatsSchema);
const Layout = mongoose.model('Layout', layoutSchema);

module.exports.CompanyStats = CompanyStats;
module.exports.Layout = Layout;
