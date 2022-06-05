import {join, dirname} from 'path';
import {readFile} from 'fs';
import {fileURLToPath} from 'url';
const {createHash} = await import('crypto');

export const calculateHash = async () => {
    const file_name = join(dirname(fileURLToPath(import.meta.url)),'files','fileToCalculateHashFor.txt');
    await readFile(file_name, (err, data) => {
        if (err) {
            throw new Error("FS operation failed")
        } else {
            const hash = createHash('sha256')
                .update(data.toString())
                .digest('hex');
            return hash;
        }
    })
};

calculateHash();
