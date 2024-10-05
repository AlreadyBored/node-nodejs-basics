import fs from "fs/promises";

const list = async () => {
  const folderPath = "src/fs/files";

  try {
    await fs.access(folderPath, fs.constants.F_OK);
    const files = await fs.readdir(folderPath);
    console.log(files.join("\n"));
  } catch (err) {
    throw new Error("FS operation failed");
  }
};

await list();
