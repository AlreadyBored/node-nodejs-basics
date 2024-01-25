import { createHash } from "crypto";
import { readFile } from "fs/promises";
import path from "path";
import { getDirnameFromUrl } from "../utils/utils" ;

const __dirname = getDirnameFromUrl(import.meta.url);
const pathToFile = path.join(__dirname, "files", "fileToCalculateHashFor.txt");

const calculateHash = async () => {
    const content = await readFile (pathToFile);
    const hash = createHash('sha256').update(content).digest('hex');
    console.log(hash);
};

await calculateHash();