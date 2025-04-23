import { createWriteStream, createReadStream } from "node:fs";
import { stdin } from "node:process";

const write = async () => {
    const input = createWriteStream(import.meta.dirname + "/files/fileToWrite.txt");
    stdin.pipe(input);
};

await write();
