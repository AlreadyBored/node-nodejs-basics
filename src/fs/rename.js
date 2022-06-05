import fs from "fs/promises";

export const rename = async () => {
  const filesFolder = "./src/fs/files";
  const wrongFilename = 'wrongFilename.txt';
  const properFilename = 'properFilename.md';
  try {
    const files = await fs.readdir(filesFolder);
    const wrongFiles = files.find((file) => file === wrongFilename);
    const properFiles = files.find((file) => file === properFilename);
    if (!wrongFiles || properFiles) {
      throw new Error('FS operation failed');
    }
    if (wrongFiles && !properFiles) {
      await fs.copyFile(`${filesFolder}/${wrongFilename}`, `${filesFolder}/${properFilename}`);
    }
  } catch (error) {
    console.log(error);
  } 
};

rename();
