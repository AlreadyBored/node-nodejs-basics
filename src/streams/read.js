import { createReadStream } from "node:fs";
import { stdout } from "node:process";

const read = async () => {
    const input = createReadStream(import.meta.dirname + "/files/fileToRead.txt");
    input.pipe(stdout).setEncoding("hex");
};

await read();
