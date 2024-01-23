import {
  checkIsFileExist,
  copyFile,
  createFolder,
  getFilesFromFolder,
} from "./fileHelper.js";

const copy = async () => {
  const folderFromName = "files";
  const folderToName = "files_copy";

  const isFolderExist = await checkIsFileExist(folderToName);

  if (isFolderExist) throw new Error("FS operation failed");

  try {
    await createFolder(folderToName);

    const fromDir_files = await getFilesFromFolder(folderFromName);

    for (let fileToCopy of fromDir_files) {
      await copyFile([folderFromName, fileToCopy], [folderToName, fileToCopy]);
    }
  } catch {
    throw new Error("FS operation failed");
  }
};

await copy();
