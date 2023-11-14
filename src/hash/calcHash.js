const calculateHash = async () => {
    const fs = require('fs');
    const crypto = require('crypto');

    const readStream = fs.createReadStream(`${__dirname}/files/fileToCalculateHashFor.txt`);
    const hash = crypto.createHash('sha256')

    readStream.on('data', (chunk) => {
        hash.update(chunk)
    })

    readStream.on('end', () => {
        const hex = hash.digest('hex')
        console.log(hex);
    })

};

// await 
calculateHash();