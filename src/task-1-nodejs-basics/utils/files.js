import { access, constants } from 'node:fs/promises';

export async function checkFileExistsAsync(filePath) {
  try {
    await access(filePath, constants.F_OK);
    return true;
  } catch (error) {
    return false;
  }
}

export function getFullPath() {
  const currentDirectory = process.cwd();
  return path.join(currentDirectory, '/files');
}