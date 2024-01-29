import { createReadStream } from "fs";

const read = async () => {
  const readStream = createReadStream("./files/fileToRead.txt");

  readStream.on("error", (error) => {
    console.log(`Error reading file: ${error}`);
  });

  readStream.pipe(process.stdout);
};

await read();
