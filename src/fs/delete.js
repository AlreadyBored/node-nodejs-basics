const path = require('path')
const fs = require('fs')

export const remove = async () => {
    // Write your code here
    fs.unlink(
        path.join(__dirname, 'files', 'fileToRemove.txt'),
        (err) => {
            if (err) {
                console.log ( 'FS operation failed' )
            }
        })
};
