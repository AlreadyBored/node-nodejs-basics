import { createReadStream } from "fs";
import { stdout } from "process";

const read = async () => {
  const stream = createReadStream("src/streams/files/fileToRead.txt");
  stream.pipe(stdout);
};

await read();
