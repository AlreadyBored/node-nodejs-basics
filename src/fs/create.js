import url from "url";
import path from "path";
import fs from "fs";

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const filePath = path.join(__dirname, "files", "fresh.txt");

const create = async () => {
  return new Promise((resolve, reject) => {
    fs.writeFile(filePath, "I am fresh and young", (error) => {
      if (error !== null) {
        return reject("FS operation failed");
      }

      resolve();
    });
  });
};

await create();
