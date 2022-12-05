import path from 'path';
import { fileURLToPath } from 'url';
import { readFile } from 'node:fs/promises';
import { access, constants} from 'node:fs/promises';

const __filename = fileURLToPath(import.meta.url);
const __fileToHash = path.dirname(__filename) + '/files/fileToCalculateHashFor.txt';
const { createHash } = await import('node:crypto');
const __errorMessage = 'HASH operation failed: file not found';

const calculateHash = async () => {
    try{
        const ifFileToHashExists = 
            await access(__fileToHash, constants.R_OK)
                .then(value => true)
                .catch(err => false);

        if(!ifFileToHashExists){
            throw Error(__errorMessage);
        }

        const hash = createHash('sha256');

        const contents = await readFile(__fileToHash, { encoding: 'utf8' });
        hash.update(contents);
        console.log(hash.digest('hex'));
    }catch(e){
        console.error(e.message);
    }
};

await calculateHash();