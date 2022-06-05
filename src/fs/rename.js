const path = require('path')
const fs = require('fs')

export const rename = async () => {
    // Write your code here
    // sorry на скорую руку код
    fs.access(
        path.join(__dirname, 'files', 'properFilename.md'),
        function(error){
            if (error) {
                fs.rename(
                    path.join(__dirname, 'files', 'wrongFilename.txt'),
                    path.join(__dirname, 'files', 'properFilename.md'),
                    (err) => {
                        if (err) {
                            console.log ( 'FS operation failed must be thrown' )
                        }
                    }
                )
            }
            else {
                console.log('FS operation failed must be thrown');
            }
        });
};