import * as fs from "node:fs";

const oldName = "src/fs/files/wrongFilename.txt";
const newName = "src/fs/files/properFilename.md";
const errorMessage = "FS operation failed";

const rename = async () => {
    fs.rename(oldName, newName, (err) => {
        if (err) {
            throw new Error(errorMessage);
        }
    });
};

await rename();
