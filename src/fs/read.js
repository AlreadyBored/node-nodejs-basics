import fs from "fs/promises";

const read = async () => {
  let isFileExists = true;

  await fs
    .readFile("./files/fileToRead.txt")
    .then((data) => console.log(data.toString()))
    .catch(() => (isFileExists = false));

  if (!isFileExists) throw new Error("FS operation failed");
};

await read();
