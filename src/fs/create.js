import { fileURLToPath } from "node:url";
import { dirname } from "node:path";
import fs from "node:fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const content = "I am fresh and young";

const create = async () => {
  const filePath = `${__dirname}/files/fresh.txt`;
  try {
    await fs.promises.writeFile(filePath, content, {
      flag: "wx",
    });
  } catch (error) {
    if (error.code === "EEXIST") {
      console.log("FS operation failed");
    }
  }
};

await create();
