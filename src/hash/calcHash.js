import {createHash} from 'crypto';
import path, {dirname} from 'path';
import {fileURLToPath} from 'url';
import {createReadStream} from "fs";

const calculateHash = async () => {

    const hash = createHash('sha256')

    const __dirname = dirname(fileURLToPath(import.meta.url))
    const fileName = 'fileToCalculateHashFor.txt';
    const filePath = path.join(__dirname, 'files', fileName);

    const newReadStream = createReadStream(filePath)
    newReadStream.on('data', (chunk) => {
        hash.update(chunk)
    })
    newReadStream.on('end', () => {
        console.log('hash', hash.digest('hex'))
    })

};

await calculateHash();