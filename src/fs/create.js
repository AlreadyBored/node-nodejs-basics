import { access, writeFile, constants } from "node:fs/promises";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
const __dirname = fileURLToPath(new URL(".", import.meta.url));

const create = async () => {
  let isExist;
  const path = join(__dirname, "files/fresh.txt");
  try {
    await access(path, constants.F_OK);
    isExist = true;
  } catch {
    isExist = false;
  }
  if (isExist) throw new Error("FS operation failed");
  await writeFile(path, "I am fresh and young");
};

await create();
