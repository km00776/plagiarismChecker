
const readXlsxFile = require('read-excel-file/node');

module.exports = readXlsxFile('/path/to/file').then((rows) => {
  console.log(rows);
});

