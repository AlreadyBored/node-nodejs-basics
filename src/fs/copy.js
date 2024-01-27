import { promises as fs, constants } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';


const copy = async (sourceFolderPath, destinationFolderPath) => {
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
        const sourceItemPath = path.join(sourceFolderPath, item);
        const destinationItemPath = path.join(destinationFolderPath, item);

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
      const sourceItemPath = path.join(source, item);
      const destinationItemPath = path.join(destination, item);

      
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

const currentDir = path.dirname(fileURLToPath(import.meta.url));
const sourceFolderPath = path.join(currentDir, 'files');
const destinationFolderPath = path.join(currentDir, 'files_copy');

await copy(sourceFolderPath, destinationFolderPath);