import * as fs  from 'fs';
import { fileURLToPath } from 'url'
import { dirname } from 'path'
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
import * as crypto from "crypto"


export const calculateHash = async () => {
    const PATH_TO_FILE =  __dirname + "/files/fileToCalculateHashFor.txt";
    const buffer = await fs.promises.readFile(PATH_TO_FILE)
    const hash = crypto.createHash('sha256');
    const hex= hash.update(buffer).digest("hex");
    console.log(hex);
};

await calculateHash();