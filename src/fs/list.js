import { readdir } from 'fs';
import { resolve, dirname  } from 'node:path';
import { fileURLToPath } from 'node:url';

const filePath = resolve(dirname(fileURLToPath(import.meta.url)), './files');

const list = async () => {
    // Write your code here 
    readdir(filePath, (err, files) => {
        if (err)
          console.log(err);
        else {
          console.log("\nCurrent directory filenames:");
          files.forEach(file => {
            console.log(file);
          })
        }
      })
};

await list();