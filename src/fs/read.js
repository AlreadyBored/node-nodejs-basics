import { checkIsFileExist, readFromFile } from "./fileHelper.js";

const read = async () => {
  // Write your code here
  const filePath = ["files", "fileToRead.txt"];

  const isFileExist = await checkIsFileExist(...filePath);

  if (!isFileExist) throw new Error("FS operation failed");

  try {
    const data = await readFromFile(...filePath);

    console.log(data);
  } catch {
    throw new Error("FS operation failed");
  }
};

await read();
