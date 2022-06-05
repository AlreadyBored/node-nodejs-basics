import * as fs from 'fs';


export const rename = async () => {
    // Write your code here 

    const oldPath = 'src/fs/files/wrongFilename.txt';
    const newPath = 'src/fs/files/properFilename.md';


    try {
        fs.rename(oldPath, newPath, err => {
            if (err) {
                console.error(err);
                throw new Error("FS operation failed")
            }
        });
    } catch {
        throw new Error("FS operation failed")
    }





    // try {

    // const oldPath = 'wrongFilename.txt';
    // const newPath = 'properFilename.md';
    //     fs.exists(newPath, function (exists) {

    //         console.log("exists", exists);
    //         if (exists) {
    //             fs.rename(oldPath, newPath, function (err) {
    //                 console.log('rename callback ', err);
    //             });
    //         } else {
    //             console.log('The File Already exists');
    //         }
    //     });
    // } catch {
    //     throw new Error("FS operation failed")
    // }


};

rename()