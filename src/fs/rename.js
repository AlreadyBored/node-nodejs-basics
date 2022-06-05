import * as fs from 'fs';

export const rename = async () => {
    fs.rename('./files/wrongFilename.txt', './files/wrongFilename.txt', function (err) {
        if (err) throw err;
        console.log('File Renamed.');
    });
};
