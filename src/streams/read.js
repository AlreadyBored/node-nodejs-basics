import { createReadStream } from "fs";

const __dirname = import.meta.dirname;

const read = async () => {
  const rs = createReadStream(__dirname + "/files/fileToRead.txt");

  rs.on("data", (chunk) => {
    console.log(chunk.toString());
    process.stdout.write(chunk);
  });
};

await read();
