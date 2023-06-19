import crypto from 'node:crypto';
import * as fs from 'fs/promises';
import { dirname } from 'node:path';

const calculateHash = async () => {
    const targetFile = `${dirname(import.meta.url).slice(8)}/files/fileToCalculateHashFor.txt`;
    const content = await fs.readFile(targetFile, 'utf8')
    
    const hash = crypto.createHash('sha256').update(content)
    
    console.log(hash.digest('hex'))
};

await calculateHash();