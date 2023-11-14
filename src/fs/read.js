const read = async () => {

    const fs = require('fs');

    fs.exists(`${__dirname}/files/fileToRead.txt`, (exists) => {
        if (!exists) {
            console.error('FS operation failed: no such file')
        } else {
            fs.readFile(`${__dirname}/files/fileToRead.txt`, 'utf8', (err, data) => {
                console.log(data);
            })
        }
    })
};

// await
read();