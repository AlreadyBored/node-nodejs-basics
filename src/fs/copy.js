import * as fs from "node:fs";

const sourcePath = "src/fs/files";
const destinationPath = "src/fs/copy_files";
const errorMessage = "FS operation failed";

const copy = async () => {
    fs.access(destinationPath, (err) => {
        if (err) {
            fs.cp(sourcePath, destinationPath, { recursive: true }, (err) => {
                if (err) {
                    throw new Error(errorMessage);
                }
            });
        } else {
            throw new Error(errorMessage);
        }
    });
};

await copy();
