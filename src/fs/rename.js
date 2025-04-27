import fs from "fs/promises";

const oldFilePath = "src/fs/files/wrongFilename.txt";
const newFilePath = "src/fs/files/properFilename.md";

const rename = async () => {
    try {
        await fs.rename(oldFilePath, newFilePath);
    } catch {
        throw new Error("FS operation failed");
    }
};

await rename();
