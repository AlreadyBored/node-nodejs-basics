import { isFileExist, removeSmthing } from "../utils/utils.js";
import { join } from "path";
import { fileURLToPath } from "url";

const __dirname = fileURLToPath(new URL(".", import.meta.url));

const remove = async () => {
  const file = join(__dirname, "files/fileToRemove.txt");
  await isFileExist(file);
  removeSmthing(file);
};

await remove();
