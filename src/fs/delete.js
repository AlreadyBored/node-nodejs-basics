import { isFileExist, removeSmthing } from "../utils/utils.js";
import path from "path";
import * as url from "url";
const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

const remove = async () => {
  const file = path.join(__dirname, "files/fileToRemove.txt");
  await isFileExist(file);
  removeSmthing(file);
};

await remove();
