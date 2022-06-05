const path = require('path')
const fs = require('fs')

export const read = async () => {
    // Write your code here
    fs.readFile(
        path.join(__dirname, 'files', 'fileToRead.txt'),
        function (err, data) {
            if (err) {
                console.log ( 'FS operation failed must be thrown' )
            } else {
                console.log (data.toString())
            }
        }
    )
};