import { utilsService } from "../utils.js";

const CURRENT_DIRNAME = import.meta.dirname;

const remove = async () => {
  try {
    const fileName = "fileToRemove.txt";
    const path = utilsService.createPath(CURRENT_DIRNAME, "files", fileName);

    const isFileExist = await utilsService.isSrcExist(path);

    if (!isFileExist) {
      throw new Error("FS operation failed");
    }

    await utilsService.deleteFile(path);
  } catch (error) {
    console.log(error);
  }
};

await remove();
