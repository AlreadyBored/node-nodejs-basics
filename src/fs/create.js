import { writeFile } from "fs/promises";

const create = async () => {
  try {
    await writeFile("src/fs/files/fresh.txt", "I am fresh and young", {
      flag: "wx",
    });
  } catch (error) {
    throw new Error("FS operation failed");
  }
};

await create();
