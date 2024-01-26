import { writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const create = async () => {
  const outputFileName = 'fresh.txt';
  const outputFileText = 'I am fresh and young';
  const outputPath = path.join(__dirname, 'files', outputFileName);
  const errorMessage = 'FS operation failed';

  if (existsSync(outputPath)) throw new Error(errorMessage);
  await writeFile(outputPath, outputFileText);
};

await create();
