import { existsSync, rename as renameFile } from 'fs';

export const rename = async () => {
  try {
    if (
      existsSync('src/fs/files/properFilename.md') ||
      !existsSync('src/fs/files/wrongFilename.txt')
    ) {
      throw new Error('FS operation failed');
    } else {
      renameFile(
        'src/fs/files/wrongFilename.txt',
        'src/fs/files/properFilename.md',
        (error) => {
          if (error) throw new Error('something went wrong');
        }
      );
    }
  } catch (error) {
    console.log(error);
  }
};

rename();
