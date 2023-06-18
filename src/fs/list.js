import * as fs from "node:fs";

const filePath = "src/fs/files";
const errorMessage = "FS operation failed";

const list = async () => {
    fs.readdir(filePath, (err, files) => {
        if (err) {
            throw new Error(errorMessage);
        }
        console.log(files);
    });
};

await list();
