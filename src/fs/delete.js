import * as fs from "fs";
import path from "path";
import url from "url";

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const remove = async () => {
    const fileToRemovePath = path.join(__dirname, './files/fileToRemove.txt');

    const doesNotExistErr = 'FS operation failed: The file does not exist'

    const checkOFileToRemove = fs.existsSync(fileToRemovePath)

    if (!checkOFileToRemove) {
        throw new Error(doesNotExistErr)
    }

    fs.unlink(fileToRemovePath, (err) => {
        if (err) throw err;
    });
};

await remove();