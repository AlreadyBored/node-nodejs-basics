const path = require('path')
const fs = require('fs')

export const list = async () => {
    // Write your code here
    fs.readdir(
        path.join(__dirname, 'files'),
        function (err, items) {
            if (err) {
                throw new Error("FS operation failed")
            } else {
                console.log (items)
            }
        }
    )
};