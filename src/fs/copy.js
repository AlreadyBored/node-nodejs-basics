const copy = async () => {
  const urlFolder = new URL('./files', import.meta.url);
  const urlFolderCopy = new URL('./files_copy', import.meta.url);
  const fs = await import('node:fs/promises');
  let folder = await fs
    .access(urlFolder)
    .then(() => true)
    .catch(() => false);
  if (!folder) throw Error(`FS operation failed`);
  let folderToCopy = await fs
    .access(urlFolderCopy)
    .then(() => true)
    .catch(() => false);
  if (folderToCopy) throw Error(`FS operation failed`);
  await fs.mkdir(urlFolderCopy).catch(() => {
    throw new Error(`FS operation failed`);
  });
  folder = await fs.opendir(urlFolder).catch(() => {
    throw Error(`FS operation failed`);
  });
  folderToCopy = await fs.opendir(urlFolderCopy).catch(() => {
    throw Error(`FS operation failed`);
  });
  for await (const file of folder) {
    await fs
      .copyFile(
        `${folder.path}/${file.name}`,
        `${folderToCopy.path}/${file.name}`
      )
      .catch(() => {
        throw Error(`FS operation failed`);
      });
  }
  folderToCopy.close();
  console.log(`copied!`);
};

await copy();
