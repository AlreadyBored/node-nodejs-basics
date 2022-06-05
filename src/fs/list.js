import { readdir } from 'fs/promises';

const DIRECTORY_PATH = 'files';
const DIRECTORY_EXISTS_ERROR_MESSAGE = 'FS operation failed';

export const list = async () => {
    try {
        const files = await readdir(DIRECTORY_PATH);

        for await (const file of files)
          console.log(file);
      } catch {
        throw new Error(DIRECTORY_EXISTS_ERROR_MESSAGE);
      }
};
