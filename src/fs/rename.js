import { access, rename as renameFile } from 'fs';

export const rename = async () => {
  try {
    access('src/fs/files/wrongFilename.txt', (error) => {
      if (error) {
        throw new Error('FS operation failed');
      } else {
        access('src/fs/files/properFilename.md', (error) => {
          if (error) {
            renameFile(
              'src/fs/files/wrongFilename.txt',
              'src/fs/files/properFilename.md',
              (error) => {
                if (error) throw new Error('something went wrong');
              }
            );
          } else {
            throw new Error('FS operation failed');
          }
        });
      }
    });
  } catch (error) {
    console.log(error);
  }
};

rename();
