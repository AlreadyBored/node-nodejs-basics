import fs from 'fs'
export const rename = async () => {
    try {
        if (fs.existsSync('./files/wrongFilename.txt') || !fs.existsSync('./files/wrongFilename.txt')) {
            console.log('FS operation failed ' )
        } else {
            fs.rename('./files/wrongFilename.txt', './files/wrongFilename.txt', function(err) {
                if ( err ) console.log('ERROR: ' + err);
            });
            console.log('Renamed success')
        }
    } catch (err) {
        console.log(err)
    }

};

