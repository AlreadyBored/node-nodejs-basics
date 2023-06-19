import fs from 'fs';

const pathFile = "./src/fs/files/fileToRemove.txt";

const remove = async () => {

    if (!fs.existsSync(pathFile)) {
        throw new Error("FS operation failed");
    } else {
        fs.unlink(pathFile, function(err) {
            if (err) throw err;
            console.log("Deleting has been done");
        });
    }

};

await remove();
