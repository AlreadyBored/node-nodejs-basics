import { access, writeFile } from 'node:fs/promises';

const create = async () => {
  const __dirname = import.meta.dirname;
  const filePath = `${__dirname}/files/fresh.txt`;
  const fileContent = 'I am fresh and young';

  try {
    await access(filePath);
    throw new Error('FS operation failed');
  } catch (error) {
    if (error.code !== 'ENOENT') {
      throw error;
    }
  }

  try {
    await writeFile(filePath, fileContent, 'utf8');
  } catch (error) {
    throw error;
  }
};

await create();
