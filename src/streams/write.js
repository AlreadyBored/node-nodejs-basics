import { createWriteStream } from "node:fs";
import { EOL } from "node:os";
const write = async () => {
  const output = createWriteStream("src/streams/files/fileToWrite.txt", {
    encoding: "utf-8",
  });
  process.stdin.pipe(output);
  output
    .on("finish", () => {
      console.log(EOL);
    })
    .on("error", (error) => {
      console.error(`Error occurred: ${error.message}`);
    });
};

await write();
