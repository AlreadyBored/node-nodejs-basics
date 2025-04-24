import { utilsService } from "../utils.js";

const CURRENT_DIRNAME = import.meta.dirname;

const rename = async () => {
  try {
    const sourcePath = utilsService.createPath(
      CURRENT_DIRNAME,
      "files",
      "wrongFilename.txt"
    );

    const targetPath = utilsService.createPath(
      CURRENT_DIRNAME,
      "files",
      "properFilename.md"
    );

    const isTargetFileExist = await utilsService.isSrcExist(targetPath);
    const isSourcefileExist = await utilsService.isSrcExist(sourcePath);

    if (isTargetFileExist || !isSourcefileExist) {
      throw new Error("FS operation failed");
    }

    await utilsService.renameFile(sourcePath, targetPath);
  } catch (error) {
    console.log(error);
  }
};

await rename();
