import {writeFile, access, constants} from "fs/promises";
import {fileURLToPath} from "url";
import path from "path";

const create = async () => {
    const __fileName = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__fileName);
    const newFilePath = path.join(__dirname, "files", "fresh.txt");

    try {
        await access(newFilePath, constants.W_OK);
        throw new Error("The file already exists!");
    } catch (error) {
        if (error.code === 'ENOENT') {
            await writeFile(newFilePath, "I am fresh and young");
            return;
        }

        throw new Error("FS operation failed");
    }
};

await create();