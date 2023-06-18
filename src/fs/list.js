import fs from 'fs';
import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const dirContext = 'files';
const fileErrorMessage = 'FS operation failed';


const list = async () => {
    const __dirname = dirname(fileURLToPath(import.meta.url));
    const filesPath = path.join(__dirname, dirContext);
    // Check folder presence.
    fs.access(filesPath, err => {
        if (err) {
            // The folder is absent - error.
            throw new Error(fileErrorMessage);
        }

        // Read all in folder.
        fs.readdir(filesPath, (err, files) => {
            if (err) {
                // Smth scary happened.
                throw new Error(fileErrorMessage);
            } 

            files.forEach(file => {
                console.log(file);
            });
          });   
    });
};

await list();