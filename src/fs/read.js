import fs from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const ErrorMessageFileExist = 'FS operation failed';

const read = async () => {
  let data = '';
  const fileName = 'fileToRead.txt';
  const pathToFile = join(__dirname, 'files', fileName);

  try {
    const file = await fs.open(pathToFile);
    const stream = file.createReadStream();

    stream.on('data', (chunk) => (data += chunk));
    stream.on('end', () => console.log(data));
  } catch (error) {
    console.error(ErrorMessageFileExist);
  }
};

await read();
