import { utilsService } from "../utils.js";

const CURRENT_DIRNAME = import.meta.dirname;

const create = async () => {
  try {
    const content = "I am fresh and young";
    const fileName = "fresh.txt";
    const path = utilsService.createPath(CURRENT_DIRNAME, "files", fileName);

    const isFileExist = await utilsService.isSrcExist(path);

    if (isFileExist) {
      throw new Error("FS operation failed");
    }

    await utilsService.createFile(path, content);
  } catch (error) {
    console.log(error);
  }
};

await create();
