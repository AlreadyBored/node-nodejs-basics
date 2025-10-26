import { access, writeFile } from "fs/promises";
import path from "path";

const create = async () => {
    const folderPath = "./files";
    const fileName = "fresh.txt";
    const filePath = path.join(folderPath, fileName);
    try {
        await access(filePath);
        throw new Error("FS operation failed");
    } catch (e) {
        if (e.code !== "ENOENT") {
            throw e;
        }
    }

    const fileText = "I am fresh and young";
    await writeFile(filePath, fileText);
};

await create();
