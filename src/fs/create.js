import fs from "fs";
import url from "node:url";
import path from "path";

const create = async () => {
  const _fileName = url.fileURLToPath(import.meta.url);
  const dirname = path.dirname(_fileName);
  const filePath = path.join(dirname, "files", "fresh.txt");

  try {
    await fs.promises.writeFile(filePath, "I am fresh and young", {
      encoding: "utf-8",
      flag: "wx",
    });
  } catch (error) {
    throw error;
  }
};

await create();
