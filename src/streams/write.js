const write = async () => {
    const fs = require('fs')
    const writableStream = fs.createWriteStream(`${__dirname}/files/fileToWrite.txt`);

    process.stdin.on('data', data => {
        writableStream.write(data)
        process.exit()
    })
};

// await
write();