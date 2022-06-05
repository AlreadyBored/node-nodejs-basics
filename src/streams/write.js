import fs from "fs";
import { Stream } from "stream";
import { fileURLToPath } from "url";
import { dirname } from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const write = async () => {
    const path = __dirname + "/files/fileToWrite.txt";
    const writer = fs.createWriteStream(path)
    process.stdin.on('data', (data) => {
        writer.write(data)
        process.exit(200)
    })
};

write()