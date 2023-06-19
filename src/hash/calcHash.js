import fs from 'fs';
import crypto from "crypto";

const calculateHash = async () => {
    const pathToFile = './files/fileToCalculateHashFor.txt'
    const algorithm = 'sha256'

    await fs.readFile(pathToFile, (err, data) => {
        if (err) throw err

        const hash = crypto.createHash(algorithm)

        hash.update(data)

        const hexHash = hash.digest('hex');

        console.log('hexHash', hexHash);
    })


};

await calculateHash();