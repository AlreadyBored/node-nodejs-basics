import { createHash } from "crypto";
import { utilsService } from "../utils.js";

const CURRENT_DIRNAME = import.meta.dirname;

const calculateHash = async () => {
  try {
    const fileName = "fileToCalculateHashFor.txt";
    const path = utilsService.createPath(CURRENT_DIRNAME, "files", fileName);

    const isFileExist = await utilsService.isSrcExist(path);

    if (!isFileExist) {
      throw new Error("FS operation failed");
    }

    const content = await utilsService.readFileContent(path);
    const data = await getHash(content);

    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

const getHash = async (content) => {
  return new Promise((res) => {
    const hash = createHash("sha256");
    hash.update(content);
    res(hash.digest("hex"));
  });
};

await calculateHash();
