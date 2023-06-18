import * as fs from "node:fs";

const filePath = "src/fs/files/fileToRemove.txt";
const errorMessage = "FS operation failed";

const remove = async () => {
    fs.unlink(filePath, (err) => {
        if (err) {
            throw new Error(errorMessage);
        }
    });
};

await remove();
