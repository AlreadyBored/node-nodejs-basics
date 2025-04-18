import fs from "fs/promises";

const copy = async () => {
  // Write your code here
  const sourceDir = "./files";
  const destDir = "./files_copy";
  try {
    await fs.access(sourceDir);
  } catch (err) {
    if (err.code === "ENOENT") {
      throw new Error("FS operation failed");
    }
  }

  try {
    await fs.access(destDir);
    throw new Error("FS operation failed");
  } catch (error) {
    if (error.code === "ENOENT") {
      // Variant #1
      // await fs.mkdir("./files_copy");

      // const files = await fs.readdir("./files");

      // files.forEach((fileName) => {
      //   const source = "./files/" + fileName;
      //   const dest = destDir + "/" + fileName;
      //   fs.copyFile(source, dest);
      // });

      // Variant #2
      await fs.cp(sourceDir, destDir, { recursive: true });
    } else {
      throw error;
    }
  }
};

await copy();
