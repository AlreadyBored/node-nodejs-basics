import { writeFile } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

export const create = async () => {
  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  const filePath = path.join(__dirname, "files/fresh.txt");
  const content = "I am fresh and young";

  try {
    await writeFile(filePath, content, { flag: "wx" });
    console.log("File written successfully!");
  } catch (err) {
    err.message = "FS operation failed";
    console.error(err);
  }
};

create();
