import fs from "fs";
import util from "util";
import path from "path";
import url from "url";

const writeFilePromise = util.promisify(fs.writeFile);

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.resolve(__dirname, "files", "fresh.txt");

const content = "I am fresh and young";

const create = async () => {
  try {
    await writeFilePromise(filePath, content, {
      flag: "wx",
    });
    console.log("File has been successfully created");
  } catch (error) {
    if (error.code === "EEXIST") {
      throw new Error("FS operation failed");
    }
  }
};

await create();
