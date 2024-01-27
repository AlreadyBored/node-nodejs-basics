import { createWriteStream } from "fs";
import { stdin } from "process";

const write = async () => {
  const writableStream = createWriteStream("src/streams/files/fileToWrite.txt");

  stdin.pipe(writableStream);
};

await write();
