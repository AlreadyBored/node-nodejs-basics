import fs from "fs/promises";

const sourceDirPath = "src/fs/files"
const destinationDirPath = "src/fs/files_copy"

const copy = async () => {
    try {
        await fs.cp(sourceDirPath, destinationDirPath, { recursive: true, force: false, errorOnExist: true });
    } catch {
        throw new Error("FS operation failed");
    }
};

await copy();
