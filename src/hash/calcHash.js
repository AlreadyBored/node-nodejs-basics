import fs from 'fs/promises';
import path from 'path';
const __dirname = path.dirname(process.argv[1]);
const {createHash} = await import('crypto');

export const calculateHash = async () => {
    try {
        const hash = createHash('sha256');
        let file = await fs.readFile(path.join(__dirname, '/files/fileToCalculateHashFor.txt'));
        hash.update(file);
        return await hash.digest('hex')
    } catch (e) {
        throw new Error('FS operation failed')
    }
};

// console.log(await calculateHash())