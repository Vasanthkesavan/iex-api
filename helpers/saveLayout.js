const Layout = require('../db').Layout;

module.exports = saveLayout = (req, res) => {
    let data = req.body;
    let newLayout = new Layout();
    data.forEach(function(column) {
        newLayout.positionsTab.push(column);
    });
    newLayout.save();
    res.send('Saved Successfully!');
}
