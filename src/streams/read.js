import { createReadStream } from "fs";
import { stdout } from "process";
import path from "path";

const filePath = path.resolve("src/streams/files/fileToRead.txt");

const read = async () => createReadStream(filePath).pipe(stdout);

await read();
