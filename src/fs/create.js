import { fileURLToPath } from "url";
import path from "path";
import fs from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const create = async () => {
  // Write your code here

  const filePath = path.join(__dirname, "files", "fresh.txt");

  fs.access(filePath, fs.constants.W_OK, (error) => {
    if (error) {
      fs.writeFile(filePath, "I am fresh and young", (error) => {
        if (error) {
          console.log("Sorry ...");
        }
      });
    } else {
      throw new Error("FS operation failed");
    }
  });
};

create();
