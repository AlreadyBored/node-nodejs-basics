import {readFile} from 'fs/promises';
import path, { dirname } from 'path';
import url from 'url';
import crypto from 'crypto';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const calculateHash = async () => {

    const fileForHash = path.join(
      __dirname,
      'files',
      'fileToCalculateHashFor.txt'
    );

    try{
        const content = await readFile(fileForHash, {
          encoding: 'utf8',
        });
        const hash = crypto.createHash('sha256').update(content).digest('hex');
        console.log(hash);
    }catch{
        throw new Error('no hash file')
    }

};

await calculateHash();
