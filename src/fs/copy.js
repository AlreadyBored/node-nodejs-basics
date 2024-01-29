const copy = async () => {
  try {
    const { promises: fsPromises } = await import('fs');
    const { join } = await import('path');
    const sourceFolder = join('.', 'files');
    const destinationFolder = join('.', 'files_copy');

    // Does 'files_copy' already exists?
    try {
      await fsPromises.stat(destinationFolder);
      throw new Error('FS operation failed');
    } catch (error) {
      if (error.code !== 'ENOENT') {
        throw error; // propagate
      }
    }

     // Create destinationFolder
     await fsPromises.mkdir(destinationFolder, { recursive: true });

     // Copy folder data
     const copyFolderData = async (source, dest) => {
       const files = await fsPromises.readdir(source);

       for (const file of files) {
         const srcPath = join(source, file);
         const destPath = join(dest, file);
         const stats = await fsPromises.stat(srcPath);

         if (stats.isDirectory()) {
           await fsPromises.mkdir(destPath);
           await copyFolderData(srcPath, destPath); // Recursively copy
        } else {
          await fsPromises.copyFile(srcPath, destPath);
        }
      }
    }
    await copyFolderData(sourceFolder, destinationFolder);

    console.log('Files copied successfully');
  } catch (error) {
    console.error(`Error: ${error.message}`);
    throw error; // Propagate
  }
};

await copy();

/* copy.js - implement function that copies folder files with all
* its content into folder files_copy at the same level
* (if files folder doesn't exist or files_copy has already been created
* Error with message FS operation failed must be thrown) */
