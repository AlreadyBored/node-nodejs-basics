import { utilsService } from "../utils.js";

const CURRENT_DIRNAME = import.meta.dirname;

const list = async () => {
  try {
    const folderName = "files";
    const path = utilsService.createPath(CURRENT_DIRNAME, folderName);

    const isFolderExist = await utilsService.isSrcExist(path);

    if (!isFolderExist) {
      throw new Error("FS operation failed");
    }

    const files = await utilsService.readDirectory(path);

    console.log(files);
  } catch (error) {
    console.log(error);
  }
};

await list();
