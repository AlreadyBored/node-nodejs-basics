import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const inDirName = 'files';
const outDirName = 'files_copy';
const fileErrorMessage = 'FS operation failed';

const copy = async () => 
{
    const __dirname = dirname(fileURLToPath(import.meta.url));

    const inPath = path.join(__dirname, inDirName);
    const outPath = path.join(__dirname, outDirName);

    // Check in-path presence.
    fs.access(inPath, err => {
        if (err) {
            throw new Error(fileErrorMessage);
        }

        // in-path found.
        // Check out-path ansence.
        fs.access(outPath, err => {
            if (!err) {
                throw new Error(fileErrorMessage);
            }
            // Out-path not found.
    
            // Let's make out-path.
            fs.mkdir(outPath, err => {
                if (err) {
                    // Make dir failed.
                    throw new Error(fileErrorMessage + ":'" + outPath + "' is not created.");
                }

                // Read all in-path and copy.
                fs.readdir(inPath, (err, files) => {
                    if (err) {
                        // Smth scary happened.
                        throw new Error(fileErrorMessage);
                    } 

                    files.forEach(file => {
                        fs.copyFile(path.join(inPath, file), path.join(outPath, file), (err) => {
                            if (err) {
                              throw new Error(fileErrorMessage + " at copying of a file'" + file  + "'");
                            }
                            else {               
                                // 'file' file is copied.
                            }
                          });
                    });
                  });   
            }); // mk-dir
        }) // out-path
    }); // in-path
};

await copy();
