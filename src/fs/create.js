import { promises as fs } from "fs";
import path from "path";

const create = async () => {
  const filePath = path.join("files", "fresh.js");

  try {
    await fs.access(filePath);
    throw new Error("FS operation is failed.");
  } catch (e) {
    if (e.code === "ENOENT") {
      await fs.writeFile(filePath, "I am fresh and young", "utf8");
    } else {
      throw new Error("FS Operation is failed.");
    }
  }
};

await create();
