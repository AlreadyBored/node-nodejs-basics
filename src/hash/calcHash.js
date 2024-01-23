import fs from 'fs';
import crypto from "crypto";
import path from "path";
import url from "url";

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const calculateHash = async () => {
    const pathToFile = path.join(__dirname, './files/fileToCalculateHashFor.txt')
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