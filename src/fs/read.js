import { existsSync } from "fs";
import { readFile } from "fs/promises";
export const read = async () => {
  if (existsSync("./files/fileToRead.txt")) {
    try {
      const content = await readFile("./files/fileToRead.txt", {
        encoding: "utf-8",
      });
      console.log(content);
    } catch (error) {
      throw new Error("FS operation failed");
    }
  } else {
    throw new Error("FS operation failed");
  }
};
read();
