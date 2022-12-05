import fs from "fs";
import { dirname } from "path";
import { fileURLToPath } from "url";
import { stdout } from "process";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const file = __dirname + "/files/fileToRead.txt";
const errorMessage = "FS operation failed";

const read = async () => {
    console.log(file);
    let fileData = [];
    const stream = fs.ReadStream(file, "utf-8");
    stream.on("data", (chunk) => {
        fileData.push(chunk.toString());
    });
    stream.on("error", () => {
        throw new Error(errorMessage);
    });
    stream.on("end", () => stdout.write(fileData.join("")));
};

await read();