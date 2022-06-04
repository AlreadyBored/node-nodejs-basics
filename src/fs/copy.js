import fs from 'fs/promises';
import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { copyFile } from 'node:fs/promises';

export const copy = async () => {
    // Write your code here 
    const __dirname = dirname(fileURLToPath(import.meta.url));
    let source = path.resolve(__dirname, 'files');
    let destination = path.resolve(__dirname, 'files_copy');
    let files = await fs.readdir(source);
    for (let file of files) {
        let filePath = path.resolve(source, file);
        let fileStat = await fs.stat(filePath);

        await fs.mkdir(destination, { recursive: true }, function (err) {
            if (err && err.code === "EEXIST") {
                console.log("Directory already exists");
                throw new Error("FS operation failed");
            } else {
                console.log("folder created");
            }
        });

        if (fileStat.isFile()) {
            await copyFile(filePath, path.resolve(destination, file));

        } else if (fileStat.isDirectory()) {

            await fs.mkdir(path.resolve(destination, file));
            await copy(filePath, path.resolve(destination, file));

        }
    }
}




// fs.mkdir(destination, { recursive: true }, function (err) {
//     if (err && err.code === "EEXIST") {
//         console.log("Directory already exists");
//         throw new Error('FS operation failed');
//     } else {
//         console.log("folder created");
//     }
// });

// await fs.readdir(source, { withFileTypes: true }, (err, files) => {
//     if (err) throw err;

//     files.forEach((file) => {
//         if (file.isFile()) {
//             const filePath = path.resolve(__dirname, source, file.name);
//             const filePathNew = path.resolve(__dirname, destination, file.name);


//             copyFile(filePath, filePathNew, (err) => {
//                 if (err) throw err;
//                 console.log(`${file.name} was copied to destination`);
//             });

//         }
//     });
// });



// fs.access(destination, constants.R_OK | constants.W_OK, (err) => {
//     if (err) {
//         copyFolder();
//     } else {
//         fs.rm(destination, { recursive: true }, (err) => {
//             if (err) {
//                 throw err;
//             }
//             copyFolder();
//         });
//     }
// });


copy();