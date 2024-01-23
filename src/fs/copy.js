import { promises as fs, constants } from 'fs';
import { join } from 'path';

const copy = async () => {
  const sourceFolderPath = 'files';
  const destinationFolderPath = 'files_copy';

  try {
    const sourceFolderStats = await fs.stat(sourceFolderPath);
    if (!sourceFolderStats.isDirectory()) {
      throw new Error('FS operation failed: Source is not a directory');
    }

    await fs.access(destinationFolderPath, constants.F_OK);

    throw new Error('FS operation failed: Destination folder already exists');
  } catch (error) {
    if (error.code === 'ENOENT') {
      await fs.mkdir(destinationFolderPath);
      console.log('Destination folder created successfully');
    } else {
      console.error('FS operation failed:', error.message);
      return;
    }
  }

  try {
    const filesAndFolders = await fs.readdir(sourceFolderPath);

    await Promise.all(
      filesAndFolders.map(async (item) => {
        const sourceItemPath = join(sourceFolderPath, item);
        const destinationItemPath = join(destinationFolderPath, item);

        const itemStats = await fs.stat(sourceItemPath);

        if (itemStats.isFile()) {
          await fs.copyFile(sourceItemPath, destinationItemPath);
        }
        else if (itemStats.isDirectory()) {
          await copyFolderRecursive(sourceItemPath, destinationItemPath);
        }
      })
    );

    console.log('Copy operation successful');
  } catch (error) {
    console.error('FS operation failed:', error.message);
  }
};

const copyFolderRecursive = async (source, destination) => {
  await fs.mkdir(destination);

  const filesAndFolders = await fs.readdir(source);

  await Promise.all(
    filesAndFolders.map(async (item) => {
      const sourceItemPath = join(source, item);
      const destinationItemPath = join(destination, item);

      const itemStats = await fs.stat(sourceItemPath);

      if (itemStats.isFile()) {
        await fs.copyFile(sourceItemPath, destinationItemPath);
      }
      
      else if (itemStats.isDirectory()) {
        await copyFolderRecursive(sourceItemPath, destinationItemPath);
      }
    })
  );
};

await copy();
