import fs from 'fs/promises';
export const rename = async () => {
  const wrongFile = new URL('./files/wrongFilename.txt', import.meta.url);
  const properFile = new URL('./files/properFilename.md', import.meta.url);
  const wrongFileExists = await fs.stat(wrongFile).then(
    () => true,
    () => false
  );
  const properFileExists = await fs.stat(properFile).then(
    () => true,
    () => false
  );
  if (!wrongFileExists && properFileExists) {
    console.log(new Error('FS operation failed'));
    return;
  }
  await fs.rename(wrongFile, properFile);
};
