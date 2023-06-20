import { createWriteStream } from "fs";
import { stdin } from "process";
import path from "path";

const filePath = path.resolve("src/streams/files/fileToWrite.txt");

const write = async () => stdin.pipe(createWriteStream(filePath));

await write();
