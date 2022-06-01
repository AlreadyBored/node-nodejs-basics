import {fileURLToPath} from 'node:url';
import {readFile} from 'node:fs/promises';
import {createHash} from 'node:crypto';
import path from 'node:path';

export const calculateHash = async () => {
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    const subFolder = 'files';
    const fileName = 'fileToCalculateHashFor.txt';
    const absolutePath = path.join(__dirname, subFolder, fileName);

    readFile(absolutePath, {
        encoding: "UTF8",
    }).then((content) => {
            const hash = createHash('sha256')
                .update(content)
                .digest('hex');

            console.log(hash);
        }
    ).catch(err => err);
};

calculateHash();