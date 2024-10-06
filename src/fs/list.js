import { promises as fs } from 'fs';
import path from 'path';

const list = async () => {
  const files_dir = path.join(process.cwd(), 'files');

  try {
    // Проверяем существует ли папка `files`
    await fs.access(files_dir);
  } catch {
    throw new Error('FS operation failed');
  }

  const files = await fs.readdir(files_dir, { withFileTypes: true });
  const file_name_arr = [];

  for (const { name } of files) {
    console.log(name);
    file_name_arr.push(name);
  }

  // я хз, тут по задаче вроде нужно массив в консоль вывести или просто все имена
  console.log(file_name_arr);
};

await list();
