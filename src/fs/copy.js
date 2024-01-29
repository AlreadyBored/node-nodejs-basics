import fs from "fs/promises";

const copy = async () => {
  let isFolderExistsOrCreated = true;

  await fs.access("./files").catch(() => (isFolderExistsOrCreated = false));
  await fs
    .access("./files_copy")
    .catch(() => (isFolderExistsOrCreated = false));

  if (!isFolderExistsOrCreated) {
    await fs.mkdir("./files_copy");
    fs.cp("./files", "./files_copy", { recursive: true });
  } else {
    throw new Error("FS operation failed");
  }
};

await copy();
