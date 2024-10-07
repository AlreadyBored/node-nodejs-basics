import fs from "fs";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

const create = async () => {
  // Write your code here
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const filePath = path.join(__dirname, "files", "fresh.txt");

  if (fs.existsSync(filePath)) {
    throw new Error("FS operation failed");
  } else {
    fs.writeFile(filePath, "I am fresh and young", () =>
      console.log(`File was created in following destination ${filePath}`)
    );
  }
};
await create();
