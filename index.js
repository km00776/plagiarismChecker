const readXlsxFile = require('read-excel-file/node');

function readExcelFile() {
    readXlsxFile('/path/to/file').then((rows) => {
        console.log(rows);
      })
}

module.exports.readExcelFile = readExcelFile;