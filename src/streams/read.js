import { createReadStream } from "node:fs";
import { EOL } from "node:os";

const read = async () => {
  const input = createReadStream("src/streams/files/fileToRead.txt", {
    encoding: "utf-8",
  });
  input.pipe(process.stdout);
  input
    .on("end", () => {
      console.log(EOL);
    })
    .on("error", (error) => {
      console.error(`Error occurred: ${error.message}`);
    });
};

await read();
