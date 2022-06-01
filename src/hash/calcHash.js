import {createHash} from 'node:crypto'
import {readFile} from 'node:fs/promises'
import url from 'url';
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

export const calculateHash = async () => {
    const text = await readFile(`${__dirname}/files/fileToCalculateHashFor.txt`, {encoding: 'utf8'})
    const hash = createHash('sha256').update(text).digest('hex');
    console.log(hash)
};

calculateHash()
