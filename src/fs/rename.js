import { checkIsFileExist, renameFile } from "./fileHelper.js";

const rename = async () => {
  // Write your code here
  const filePath = ["files", "wrongFilename.txt"];
  const newFilePath = ["files", "properFilename.md"];

  const isFileExist = await checkIsFileExist(...filePath);
  const isFileWithNewNameExist = await checkIsFileExist(...newFilePath);

  if (!isFileExist || isFileWithNewNameExist)
    throw new Error("FS operation failed");

  try {
    await renameFile(filePath, newFilePath);
  } catch {
    throw new Error("FS operation failed");
  }
};

await rename();
