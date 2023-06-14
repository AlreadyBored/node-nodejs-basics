import { writeFile } from "node:fs/promises";
import { isFileExists } from "./utils.js";

const create = async () => {
  const src = "src/fs/files/fresh.txt";
  const content = "I am fresh and young";

  const exists = await isFileExists(src);

  if (exists) {
    throw new Error("FS operation failed");
  }

  const data = new Uint8Array(Buffer.from(content));
  await writeFile(src, data);
};

await create();
