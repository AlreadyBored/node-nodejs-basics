import fs from "fs/promises";

const filePath = "src/fs/files/fileToRemove.txt";

const remove = async () => {
    try {
        await fs.rm(filePath);
    } catch {
        throw new Error("FS operation failed");
    }
};

await remove();
