import fs from "fs";
import { dirname } from "path";
import { fileURLToPath } from "url";
import { stdin } from "process";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const file = __dirname + "/files/fileToWrite.txt";

const write = async () => {
    const stream = fs.createWriteStream(file);
    stdin.pipe(stream);
    console.log("Write");
};

await write();