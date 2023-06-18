import fs from 'fs';
import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const filePath = 'files/fresh.txt';
const content = 'I am fresh and young';
const fileErrorMessage = 'FS operation failed';

const create = async () => {

    const __dirname = dirname(fileURLToPath(import.meta.url));
    const fullPath = path.join(__dirname, filePath);

    // check out-file presence
    fs.access(fullPath, fs.F_OK, (err) => {
        if (!err) {
            // file is found, it's an error.
            throw new Error(fileErrorMessage);
        }
      
        // Write the content.
        fs.writeFile(fullPath, content, function (err) {
            if (err) {
                throw new Error(fileErrorMessage);
            }
      });
    });
};

await create();