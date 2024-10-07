import { rename as fsRename } from 'fs/promises';

const rename = async () => {
    try {
        await fsRename("./files/wrongFilename.txt", "./files/properFilename.md");
    } catch (error) {
        if (error.code === "ENOENT") {
            throw new Error("FS operation failed: <wrongFilename.txt> doesn't exist");
        } else if (error.code === "EEXISTS") {
            throw new Error("FS operation failed: <properFilename.md> file already exists");
        }
    }
};

await rename();