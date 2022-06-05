import crypto from'crypto';
import fs from 'fs';

export const calculateHash = async () => {
    const path = './files/fileToCalculateHashFor.txt';

    const fileBuffer = fs.readFileSync(path, "utf8");
    const hashSum = crypto.createHash('sha256').update(fileBuffer).digest('hex');

fs.writeFile(path, hashSum, function (err) {
    if (err) throw err;
     console.log('File was overwritten'); 
    });

}

calculateHash()


