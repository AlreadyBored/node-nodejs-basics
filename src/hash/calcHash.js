import fs from 'fs';
import crypto from 'crypto';
import path from 'path';

const calculateHash = async () => {
    const folderPath = 'src/hash/files';
    const filePath = path.join(folderPath, 'fileToCalculateHashFor.txt');
    const hashAlgorithm = 'sha256';
    const hash = crypto.createHash(hashAlgorithm);
    const stream = fs.createReadStream(filePath);

    stream.on('data', (data) => {
        hash.update(data);
    });

    stream.on('end', () => {
        console.log(hash.digest('hex'));
    });

    stream.on('error', (error) => {
        throw error;
    });
};

await calculateHash();
