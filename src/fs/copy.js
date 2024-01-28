const copy = async () => {
  try {
    const fs = require('fs');
    const path = require('path');

    const sourceFolder = path.join(__dirname, 'files');
    const destinationFolder = path.join(__dirname, 'files_copy');

    await fs.promises.stat(sourceFolder); // Check if source folder exists

    await fs.mkdir(destinationFolder, { recursive : true}); // Create destination folder

    await copyFolderContents(sourceFolder, destinationFolder);

    console.log('Files copied successfully');
  } catch (error) {
    console.error(`Error: ${error.message}`);
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
        }
    }
  }
};

await copy();