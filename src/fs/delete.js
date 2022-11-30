import fs from "fs";

const remove = async () => {
    const path = 'files/fileToRemove.txt';
    fs.access(path, fs.F_OK, (err) => {
        if (err) {
            throw 'FS operation failed'
            return
        }
        return fs.unlinkSync(path);
    })

};

await remove();