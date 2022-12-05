import {readAndPrintFile} from "./helpers/readAndPrint.js";

const read = async () => {
  const path = "src/fs/files/fileToRead.txt"
  await readAndPrintFile(path, console.log)
};

await read();