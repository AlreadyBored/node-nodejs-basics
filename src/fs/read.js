import fs from "fs/promises";

const read = async () => {
  // Write your code here
  try {
    await fs.access("./files/fileToRead.txt");

    const content = await fs.readFile("./files/fileToRead.txt", {
      encoding: "utf8",
    });
    console.log(content);
  } catch (error) {
    if (error.code === "ENOENT") {
      throw new Error("FS operation failed");
    }
  }
};

await read();
