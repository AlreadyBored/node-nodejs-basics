const read = async () => {
    const fs = require('fs');
    const readStream = fs.createReadStream(`${__dirname}/files/fileToRead.txt`);

    readStream.on('data', (chunk) => {
        process.stdout.write(chunk)
    })
};

// await
read();