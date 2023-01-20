const path = require('path')
console.log('require.main.filename', require.main.filename)
module.exports = path.dirname(require.main.filename)