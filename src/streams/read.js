import { createReadStream } from "fs";

const read = async () => {
  const rs = createReadStream("./src/streams/files/fileToRead.txt");

  rs.on("data", (chunk) => {
    console.log(chunk.toString());
    process.stdout.write(chunk);
  });
};

await read();
