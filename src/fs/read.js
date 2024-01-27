import fs from "fs/promises";
import path, {dirname} from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const read = async () => {
    try {
        const fileContent = await fs.readFile(path.join(__dirname, "files", "fileToRead.txt"), {encoding: "utf-8"});
        console.log(fileContent);
    } catch {
        throw new Error("FS operation failed")
    }
};

await read();