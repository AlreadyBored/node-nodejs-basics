import * as fsPromises from "node:fs/promises";

const copy = async () => {
    try {
        await fsPromises.cp("files", "files_copy", {
            recursive: true,
            force: false,
            errorOnExist: true
        });
    } catch (error) {
        throw new Error('FS operation failed');
    }
};

await copy();
