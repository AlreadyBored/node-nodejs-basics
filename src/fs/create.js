import { getAbsUrl } from "./utils.js";
import { ERROR_MSG, FILES_PATH } from "./constants.js";
import { writeFile } from "fs/promises";

const FILE_NAME = "fresh.txt";
const FILE_CONTENT = "I am fresh and young";

const create = async () => {
  const url = getAbsUrl(`${FILES_PATH}/${FILE_NAME}`);

  try {
    await writeFile(url, FILE_CONTENT, { flag: "wx" });
  } catch (err) {
    console.log(err);
    throw new Error(ERROR_MSG);
  }
};

await create();
