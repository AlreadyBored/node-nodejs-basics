import { access, rename as renameFile } from "fs/promises";
import path from "path";

const rename = async () => {
    const folderPath = "./files";
    const oldFileName = "wrongFilename.txt";
    const fileName = "properFilename.md";
    const oldfilePath = path.join(folderPath, oldFileName);
    const newfilePath = path.join(folderPath, fileName);

    try {
        await access(oldfilePath);
    } catch (e) {
        if (e.code === "ENOENT") {
            throw new Error("FS operation failed");
        }
    }
    try {
        await access(newfilePath);
        throw new Error("FS operation failed");
    } catch (e) {
        if (e.code !== "ENOENT") {
            throw e;
        }
    }

    await renameFile(oldfilePath, newfilePath);
};

await rename();
