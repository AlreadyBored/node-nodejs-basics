import fs from "fs/promises";
import path from "path";

const list = async () => {
  const dirPath = path.join("files");

  try {
    const items = await fs.readdir(dirPath, { withFileTypes: true });

    const files = items
      .filter((item) => item.isFile())
      .map((file) => file.name);

    console.log(files);
  } catch {
    throw new Error("FS operation failed");
  }
};

await list();
