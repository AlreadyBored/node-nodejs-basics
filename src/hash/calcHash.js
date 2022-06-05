import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { readFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';

const pathToHashCalc = dirname(fileURLToPath(import.meta.url)) + '/files/fileToCalculateHashFor.txt'

export const calculateHash = async () => {
    
    try {
        const fileToHashCalc = await readFile(pathToHashCalc);
        const hash = createHash('sha256');
        console.log(hash.update(fileToHashCalc).digest('hex'));   
    } catch (err) {
        console.log("Catch some error: ") + err;
    }
    
};
