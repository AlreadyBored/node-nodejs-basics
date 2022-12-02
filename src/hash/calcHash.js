import {createReadStream} from 'node:fs'
import path, {dirname} from 'path'
import {fileURLToPath} from "url"

const {createHash} = await import('node:crypto')

const FILE_NAME = 'fileToCalculateHashFor.txt'
const FILE_FOLDER = 'files'

const calculateHash = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    const filepath = path.join(__dirname, path.sep, FILE_FOLDER, FILE_NAME)

    const hash = createHash('sha256')
    const input = createReadStream(filepath)
    input.on('readable', () => {
        const data = input.read();
        if (data)
            hash.update(data);
        else {
            console.log(`${hash.digest('hex')} `);
        }
    });
};

await calculateHash();