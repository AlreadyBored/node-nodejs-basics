import { createWriteStream } from "fs";
import { pipeline } from "stream/promises";

const FILE_PATH = "./files/fileToWrite.txt";
const fileUrl = new URL(FILE_PATH, import.meta.url);

const write = async () => {
  const writableStream = createWriteStream(fileUrl, { flags: "a" });

  await pipeline(process.stdin, writableStream);
};

await write();
