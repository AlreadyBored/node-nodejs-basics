const fs = require("fs");
const crypto = require("crypto");
let dirFile = './src/hash/files/fileToCalculateHashFor.txt'

const calculateHash = async () => {
    fs.readFile(dirFile, 'utf8',function(err, data){
    let hex = crypto.createHash('SHA256').update(data).digest('hex');
    console.log('hex =',hex)
    });
};

calculateHash();