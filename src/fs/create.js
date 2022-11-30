import { writeFile, access, constants } from "node:fs/promises";
import { getDirName, isExist } from "../helpers/files.mjs";

const create = async () => {
  const filePath = `${getDirName(import.meta.url)}/files/fresh.txt`;

  if (await isExist(filePath)) {
    throw new Error("FS operation failed");
  } else {
    await writeFile(filePath, "I am fresh and young");
  }
};

await create();
