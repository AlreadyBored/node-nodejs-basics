import { writeFile} from 'fs/promises';
import path, { dirname } from 'path';
import url from 'url';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const create = async () => {
  const filePath = path.join(__dirname, 'files', 'fresh.txt');
  const content = 'I am fresh and young';
  await writeFile(filePath, content, {flag: 'wx'})
    .catch((err) => {
      if (err) {
        throw new Error('FS operation failed');
      }
    });
};

await create();
