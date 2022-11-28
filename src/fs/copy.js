import { access, readdir, mkdir } from "node:fs/promises";
import { copyFile } from "node:fs";

const copy = async () => {
  const sourceUrl = new URL("./files", import.meta.url);
  const newUrl = new URL("./files_copy", import.meta.url);

  const copyFiles = async () => {
    await mkdir(newUrl);

    const files = await readdir(sourceUrl);

    files.forEach((file) => {
      copyFile(
        new URL(`./files/${file}`, import.meta.url),
        new URL(`./files_copy/${file}`, import.meta.url),
        (error) => {
          if (error) {
            console.log(error);
          }
        }
      );
    });
  };

  try {
    await access(sourceUrl);
    await copyFiles();
  } catch {
    throw new Error("FS operation failed");
  }
};

copy();
