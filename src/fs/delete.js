import { checkIsFileExist, deleteFile } from "./fileHelper.js";

const remove = async () => {
  // Write your code here
  const filePath = ["files", "fileToRemove.txt"];

  const isFileExist = await checkIsFileExist(...filePath);

  if (!isFileExist) throw new Error("FS operation failed");

  try {
    await deleteFile(...filePath);
  } catch {
    throw new Error("FS operation failed");
  }
};

await remove();
