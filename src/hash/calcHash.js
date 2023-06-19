const calculateHash = async () => {
    const crypto = require('crypto');
    await console.log(crypto.createHash('sha256').update("./files/fileToCalculateHashFor.txt").digest("hex"));
};

calculateHash();