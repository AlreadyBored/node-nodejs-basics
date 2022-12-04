import fs from "node:fs/promises";
//import { open, writeFile } from "node:fs/promises";

import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const create = async () => {
  const errMsg = "FS operation failed";
  try {
    await fs.writeFile(
      path.join(__dirname, "files", "fresh.txt"),
      "I am fresh and young",
      { flag: "wx" }
    );

    // console.log("FS operation failed");
    // console.log("Асинхронная запись файла завершена. Содержимое файла:");
    // let data = fs.readFileSync("fresh.txt", "utf8");
    // console.log(data); // выводим считанные данные
  } catch (err) {
    throw new Error(errMsg);
  }
};

await create();
