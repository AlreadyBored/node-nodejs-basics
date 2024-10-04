import fs from "fs/promises";
import path from "path";

const create = async () => {
  const filePath = path.join(process.cwd(), "files", "fresh.txt");

  const fileExists = await fs
    .access(filePath)
    .then(() => true)
    .catch(() => false);

  if (fileExists) {
    throw new Error("FS operation failed");
  }
  await fs.writeFile(filePath, "I am fresh and young", { encoding: "utf8" });
};

await create();
