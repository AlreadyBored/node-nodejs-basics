import * as fs from "fs";

const remove = async () => {
    const fileToRemove = './files/fileToRemove.txt'
    const errorMessage = 'FS operation failed'


    const checkOFileToRemove = fs.existsSync(fileToRemove)

    if (!checkOFileToRemove) {
        throw new Error(errorMessage)
    }

    fs.unlink(fileToRemove, (err) => {
        if (err) throw new Error(errorMessage);
    });
};

await remove();