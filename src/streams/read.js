import { createReadStream } from "node:fs";

const read = async () => {
  const input = createReadStream("src/streams/files/fileToRead.txt", {
    encoding: "utf-8",
  });
  input
    .on("readable", () => {
      let chunk;
      while (null !== (chunk = input.read())) {
        console.log(chunk);
      }
    })
    .on("end", () => {
      console.log("");
    })
    .on("error", (error) => {
      console.error(`Error occurred: ${error.message}`);
    });
};

await read();
