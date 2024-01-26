import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { access, constants, readFile } from 'node:fs';
import { createHash } from 'node:crypto';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const filePath = join(__dirname, 'files', 'fileToCalculateHashFor.txt');

const calculateHash = async () => {
    access(filePath, constants.F_OK, (err) => {
        if (err) {
            throw new Error('FS operation failed');
        } else {
            readFile(filePath, ((err, data) => {
                if(err) {
                    throw err
                }

                const hash = createHash('sha256');
                hash.update(Buffer.from(data).toString());
                const hex = hash.digest('hex');
                console.log(hex);
            }))
        }
    })
};

await calculateHash();