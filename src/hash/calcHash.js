import crypto from "crypto";
import fs from "node:fs/promises";
import * as url from 'url';
import path from "path";

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
const pathToFile = path.join(__dirname, "files", "fileToCalculateHashFor.txt");

const calculateHash = async () => {
    const data = await fs.readFile(pathToFile);
    const hash = crypto.createHash("SHA256")
                        .update(data)
                        .digest("hex");   
    console.log(hash);
};

await calculateHash();