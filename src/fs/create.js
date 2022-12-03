import { writeFile } from "fs/promises";
import path from "path";
import * as url from "url";

export const errorMassage = "FS operation failed";

const __dirname = url.fileURLToPath(new URL(".", import.meta.url));
const pathToFile = path.join(__dirname, "files", "fresh.txt");
const message = "I am fresh and young";

const create = async () =>
  await writeFile(pathToFile, message, { flag: "wx" }).catch((_err) => {
    throw new Error(errorMassage);
  });

await create();
