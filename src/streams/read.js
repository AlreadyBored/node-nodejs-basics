import { createReadStream } from "fs";

const FILE_PATH = "./src/streams/files/fileToRead.txt";

const read = async () => {
  createReadStream(FILE_PATH).pipe(process.stdout);
};

await read();
