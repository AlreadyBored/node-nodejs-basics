import { fileURLToPath } from "url";
import fs from "fs/promises";
import crypto from "crypto";
import path, {dirname} from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const calculateHash = async () => {
    const content = await fs.readFile(path.resolve(__dirname, 'files/fileToCalculateHashFor.txt'));

    const hash = crypto.createHash('SHA256').update(content);

    const hex = hash.digest('hex');

    console.log(hex);
};

await calculateHash();