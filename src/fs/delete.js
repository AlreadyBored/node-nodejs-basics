import { unlink } from 'fs';

const remove = async (file) => {

    unlink(file, (err) => {
        if(err && err.code == 'ENOENT') {
            // file doens't exist
            console.info("FS operation failed");
        } else if (err) {
            // other errors, e.g. maybe we don't have enough permission
            console.error(err);
        } else {
            console.info(`removed`);
        }
    });
};

await remove('./files/fileToRemove copy.txt');