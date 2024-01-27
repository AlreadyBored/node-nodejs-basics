import fs from "fs";

const read = async () => {
  const path = "files/fileToRead.txt";
  const error = Error("FS operation failed");

  fs.readFile(path, (err, data) => {
    if (err) {
      throw error;
    } else console.log(data.toString());
  });
};

await read();
