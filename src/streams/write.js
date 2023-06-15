import { createWriteStream } from "node:fs";
import { stdin } from "node:process";

const write = async () => {
  const src = "src/streams/files/fileToWrite.txt";
  const stream = createWriteStream(src);

  console.log(`Any typed data will be written to file: '${src}.'`);
  console.log("Press CTRL + C when you finish you test.");
  console.log("Good luck!");

  stream.on("error", function (error) {
    console.log(`error: ${error.message}`);
  });

  stdin.pipe(stream);
};

await write();
