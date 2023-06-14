import { createReadStream } from "fs";
import { promisify } from "util";

const read = async () => {
  const fileToRead = "./src/streams/files/fileToRead.txt";
  const stream = createReadStream(fileToRead);
  const streamOnEnd = promisify(stream.on).bind(stream, "end");
  stream.on("data", (data) => {
    process.stdout.write(data);
  });
  await streamOnEnd();
  process.stdout.write("\n");
};

await read();
