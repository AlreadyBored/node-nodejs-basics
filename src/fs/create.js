import { writeFile } from "node:fs/promises";
import { ERR_DATA } from "../const/error.js";
import { makePath } from "../utils/makePath.js";

const DATA = "I am fresh and young";

const path = makePath(import.meta.url, "/files/fresh.txt");

const create = async () => {
  try {
    await writeFile(path, DATA, { flag: "wx" });
  } catch (err) {
    throw new Error(ERR_DATA);
  }
};

await create();
