const copy = async () => {
  try {
    const fs = require('fs');
    const path = require('path');

    const sourceFolder = path.join(__dirname, 'files');
    const destinationFolder = path.join(__dirname, 'files_copy');

    await fs.promises.stat(sourceFolder); // Check if source folder exists

    // Check if destination folder already exists
    try {
        await fs.promises.stat(destinationFolder);
        throw new Error('FS operation failed');
    } catch (err) {
        if (err.code !== 'ENOENT') {
            throw err; // Re-throw errors
        }
    }

    await fs.mkdir(destinationFolder, { recursive : true}); // Create destination folder

    await copyFolderContents(sourceFolder, destinationFolder);

    console.log('Files copied successfully');
  } catch (error) {
    console.error(`Error: ${error.message}`);
    // Re-throw to propagate to caller
  }

  // Helper function for recursively copying (nested for encapsulation)
  async function copyFolderContents(source, dest) {
    const files = await fs.promises.readdir(source);

    for (const file of files) {
        const srcPath = path.join(source, file);
        const destPath = path.join(dest, file)

        try {
            const stats = await fs.promises.stat(srcPath);

            if (stats.isDirectory()) {
                await fs.promises.mkdir(destPath);
                await copyFolderContents(srcPath, destPath); // Recursively copy directory
            } else {
                await fs.promises.copyFile(srcPath, destPath);
            }
        } catch (err) {
            console.error(`Error copying ${file}: ${err.message}`);
            // Re-throw here to stop copying and propagate the error
            throw err;
        }
    }
  }
};

await copy();