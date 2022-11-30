import fs from "fs";
import crypto from "crypto";

const calculateHash = async () => {
    const fd = fs.createReadStream('./files/fileToCalculateHashFor.txt');
    const hash = crypto.createHash('SHA256');
    hash.setEncoding('hex');

    fd.on('end', function() {
        hash.end();
        console.log(hash.read());
    });

    fd.pipe(hash);
};

await calculateHash();