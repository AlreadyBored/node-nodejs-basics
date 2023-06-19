import { readFile } from "fs/promises";
import { createHash } from "crypto";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __fileName = fileURLToPath(import.meta.url);
const __dirName = dirname(__fileName);
const file = join(__dirName, "files", "fileToCalculateHashFor.txt");

const calculateHash = async () => {
    const contents = await readFile(file);
    const hexHash = createHash("sha256").update(contents).digest("hex");
    console.log(hexHash);
};

await calculateHash();
