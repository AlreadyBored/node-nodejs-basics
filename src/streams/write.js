import { createWriteStream } from "fs";

const FILE_PATH = "./src/streams/files/fileToWrite.txt";

const write = async () => {
  const file = createWriteStream(FILE_PATH);
  process.stdin.pipe(file);
};

await write();
