import * as fs from "fs";

const remove = async () => {
    const fileToRemove = './files/fileToRemove.txt'
    const doesNotExistErr = 'FS operation failed: The file does not exist'

    const checkOFileToRemove = fs.existsSync(fileToRemove)

    if (!checkOFileToRemove) {
        throw new Error(doesNotExistErr)
    }

    fs.unlink(fileToRemove, (err) => {
        if (err) throw err;
    });
};

await remove();