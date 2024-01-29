import fs from "fs/promises";
import path, {dirname} from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const newFile = path.join(__dirname, "files", "fresh.txt");

const create = async () => {
    try {
        await fs.writeFile(newFile, "I am fresh and young", {flag: "wx"})
    } catch {
        throw new Error("FS operation failed")
    }
};

await create();