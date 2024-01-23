import { checkIsFileExist, getFilesFromFolder } from "./fileHelper.js";

const list = async () => {
  // Write your code here
  const folderName = "files";

  const isFileExist = await checkIsFileExist(folderName);

  if (!isFileExist) throw new Error("FS operation failed");

  try {
    const filesFromFolder = await getFilesFromFolder(folderName);

    filesFromFolder.forEach((file) => console.log(file));
  } catch (error) {
    throw new Error("FS operation failed");
  }
};

await list();
