const path = require('path')
const fs = require('fs')

export const remove = async (filename) => {
    // Write your code here
    fs.unlink(
        path.join(__dirname, 'files', filename),
        (err) => {
            if (err) {
                console.log ( 'FS operation failed' )
            }
        })
};
