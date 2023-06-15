import { createReadStream } from "node:fs";

const read = async () => {
  const src = "src/streams/files/fileToRead.txt";
  const stream = createReadStream(src);

  stream.on("data", (data) => {
    process.stdout.write(data);
  });

  stream.on("error", function (error) {
    console.log(`error: ${error.message}`);
  });
};

await read();
