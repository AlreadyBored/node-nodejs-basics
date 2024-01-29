import fs from "node:fs";

const read = () => {
  const fileStream = fs.createReadStream("./src/streams/files/fileToRead.txt");

  fileStream.on("error", (err) => console.error(`Error reading file: ${err}`));
  fileStream.pipe(process.stdout);
};

read();
