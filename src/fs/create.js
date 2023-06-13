import { writeFile, access } from "node:fs/promises";

const create = async () => {
  try {
    await access("src/fs/files/fresh.txt");
    throw new Error("FS operation failed");
  } catch (error) {
    if (error.code === "ENOENT") {
      try {
        await writeFile(
          "src/fs/files/fresh.txt",
          "I am fresh and young",
          "utf8"
        );
      } catch (error) {
        console.error(error);
      }
    } else throw error;
  }
};

await create();
