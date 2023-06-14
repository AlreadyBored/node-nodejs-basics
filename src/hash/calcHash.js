import crypto  from "node:crypto";
import fs from 'node:fs'
import url from "url";
import path from "path";

const calculateHash = async () => {
    const fileFolder = 'files';

    const __filename = url.fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    fs.readFile(path.join(__dirname, fileFolder, 'fileToCalculateHashFor.txt'), null, (err, buffer) => {
        if (err) {
            throw new Error(err.message);
        }

        const hash = crypto.createHash('sha256', buffer.toString());
        console.log(hash.digest('hex'))
    })


};

await calculateHash();