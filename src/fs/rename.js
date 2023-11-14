const rename = async () => {

    const fs = require('fs');

    fs.exists(`${__dirname}/files/properFilename.md`, (exists) => {
        if (exists) {
            console.error('FS operation failed: already renamed');
        } else {
            fs.exists(`${__dirname}/files/wrongFilename.txt`, (exists) => {
                if (!exists) {
                    console.error('FS operation failed')
                } else {
                    fs.rename(`${__dirname}/files/wrongFilename.txt`, `${__dirname}/files/properFilename.md`, () => {
                        console.log("\nFile Renamed!\n");
                    })
                }
            })
        }
    })

};

// await
rename();