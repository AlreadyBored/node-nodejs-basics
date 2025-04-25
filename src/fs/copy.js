import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const copy = async () => {
  const from = path.join(__dirname, 'files');
  const to = path.join(__dirname, 'files_copy');

  try {
    await fs.access(from);

    try {
      await fs.access(to);
      throw new Error('FS operation failed: Target directory already exists');
    } catch (err) {
      if (err.code !== 'ENOENT') throw err;
    }

    await fs.mkdir(to);

    const entries = await fs.readdir(from, { withFileTypes: true });

    for (const entry of entries) {
      const sourceFile = path.join(from, entry.name);
      const targetFile = path.join(to, entry.name);

      if (entry.isFile()) {
        await fs.copyFile(sourceFile, targetFile);
      } else {
        throw new Error('FS operation failed: Nested directories not supported');
      }
    }
  } catch (err) {
    throw new Error(`FS operation failed: ${err.message}`);
  }
};

await copy();
