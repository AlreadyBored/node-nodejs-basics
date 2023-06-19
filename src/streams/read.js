import fs from "fs";

const url = import.meta.url;
const path = new URL("./files/fileToRead.txt", url);

const read = async () => {
  fs.createReadStream(path).pipe(process.stdout);
};

await read();
