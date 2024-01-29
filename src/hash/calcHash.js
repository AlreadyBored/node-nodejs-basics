import fs from "fs/promises";
import path, {dirname} from "path";
import { fileURLToPath } from "url";
import { createHash } from "crypto";

const __dirname = dirname(fileURLToPath(import.meta.url));

const calculateHash = async () => {
    try {
        const file = await fs.readFile(path.join(__dirname, "files", "fileToCalculateHashFor.txt"));
        const hashFile = createHash("sha256").update(file).digest("hex")
        console.log(hashFile);
    } catch {
        throw new Error("FS operation failed");
    }
};

await calculateHash();