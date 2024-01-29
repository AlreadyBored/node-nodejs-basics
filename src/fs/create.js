import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import fs from 'fs/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const create = async () => {
  const folderPath = join(__dirname, 'files');
  const filePath = join(folderPath, 'fresh.txt');
  const fileContent = 'I am fresh and young';

  try {
    await fs.access(filePath);
    throw new Error('FS operation failed: File already exists');
  } catch (error) {
    if (error.code !== 'ENOENT') {
      console.error(error.message);
      return;
    }

    try {
      await fs.mkdir(folderPath, { recursive: true });
      await fs.writeFile(filePath, fileContent);

      console.log('Fresh file created successfully:', filePath);
    } catch (writeError) {
      console.error(writeError.message);
    }
  }
};

await create();