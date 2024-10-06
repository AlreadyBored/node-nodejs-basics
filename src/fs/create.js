import { writeFile } from "node:fs/promises";

const create = async () => {
  try {
    const content = "I am fresh and young";
    await writeFile("src/fs/files/fresh.txt", content, { flag: "wx+" });
  } catch (err) {
    throw new Error("FS operation failed");
  }
};

await create();
