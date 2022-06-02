import fs from 'fs';

export const rename = async () => {
    // Write your code here
    const path = 'src/fs/files/wrongFilename.txt';

    fs.rename(path, 'src/fs/files/properFilename.txt', function(err) {
        if ( err ) console.error(new Error("FS operation failed"));
    });
};

rename();
