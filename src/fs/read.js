const path = require('path')
const fs = require('fs')

export const read = async () => {
    // Write your code here
    fs.readFile(
        path.join(__dirname, 'files', 'fileToRead.txt'),
        function (err, data) {
            if (err) {
                throw new Error("FS operation failed")
            } else {
                console.log (data.toString())
            }
        }
    )
};