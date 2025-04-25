import { writeFile } from "node:fs/promises";

const create = async () => {
  const filePath = "./src/fs/files/fresh.txt";
  try {
    await writeFile(filePath, "I am fresh and young", { flag: "wx" });
  } catch (err) {
    throw new Error("FS operation failed");
  }
};

await create();
