import { utilsService } from "../utils.js";

const CURRENT_DIRNAME = import.meta.dirname;

const copy = async () => {
  try {
    const sourcePath = utilsService.createPath(CURRENT_DIRNAME, "files");
    const targetPath = utilsService.createPath(CURRENT_DIRNAME, "files_copy");

    const isTargetFolderExist = await utilsService.isSrcExist(targetPath);
    const isSourceFolderExist = await utilsService.isSrcExist(sourcePath);

    if (isTargetFolderExist || !isSourceFolderExist) {
      throw new Error("FS operation failed");
    }

    await utilsService.copyDirectory(sourcePath, targetPath);
  } catch (error) {
    console.log(error);
  }
};

await copy();
