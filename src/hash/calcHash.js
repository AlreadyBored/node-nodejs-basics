import {fileURLToPath} from "url";
import path from "path";
import {readFile} from "fs/promises";

const {
    createHash
} = await import('crypto');
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const fileToHash = path.join(__dirname, "/files/", "fileToCalculateHashFor.txt")


export const calculateHash = async () => {
    try {
        const result = await readFile(fileToHash);
        const hash = await createHash('sha256')
        hash.update(result);
        console.log(hash.digest("hex"))
    } catch (err) {
        throw Error("FS operation failed")
    }

};
//calculateHash()