import fs from "fs/promises";

const list = async () => {
  // Write your code here
  try {
    await fs.access("./files");

    const files = await fs.readdir("./files");

    files.forEach((fileName) => {
      console.log(fileName);
    });
  } catch (error) {
    if (error.code === "ENOENT") {
      throw new Error("FS operation failed");
    }
  }
};

await list();
