import fs from "fs";
import process from "process";

const write = async () => {
  const fileStream = fs.createWriteStream("./src/streams/files/fileToWrite.txt");

  fileStream.on("error", (err) => console.error(`Error writing to file: ${err}`));
  process.stdin.pipe(fileStream);

  console.log("Enter text to write to file:");

  process.stdin.on("end", () => {
    console.log("Finished writing to file");
  });
};

await write();
