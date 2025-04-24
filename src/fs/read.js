import { utilsService } from "../utils.js";

const CURRENT_DIRNAME = import.meta.dirname;

const read = async () => {
  try {
    const fileName = "fileToRead.txt";
    const path = utilsService.createPath(CURRENT_DIRNAME, "files", fileName);

    const isFileExist = await utilsService.isSrcExist(path);

    if (!isFileExist) {
      throw new Error("FS operation failed");
    }

    const content = await utilsService.readFileContent(path);

    console.log(content);
  } catch (error) {
    console.log(error);
  }
};

await read();
