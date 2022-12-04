import { createWriteStream } from "node:fs";
import { stdin } from "node:process";

const write = async () => {
    const filePath = new URL("./files/fileToWrite.txt", import.meta.url);
    const output = createWriteStream(filePath);
    stdin.pipe(output);
    console.log(`Enter text to write in to the ./files/fileToWrite.txt file`);
    console.log("To terminate it, use Ctrl+C combination");
};

await write();