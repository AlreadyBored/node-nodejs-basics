import { promises as fs } from 'fs';
import path from 'path';

const copyFilesRecursive = async (src, dest) => {
  const files = await fs.readdir(src, { withFileTypes: true });

  for (const file of files) {
    const src_path = path.join(src, file.name);
    const dest_path = path.join(dest, file.name);

    if (file.isDirectory()) {
      // Если это папка, рекурсивно копируем её
      await fs.mkdir(dest_path);
      await copyFilesRecursive(src_path, dest_path);
    } else {
      // Если это файл, копируем его
      await fs.copyFile(src_path, dest_path);
    }
  }
};

const copy = async () => {
  const files_dir = path.join(process.cwd(), 'files');
  const files_copy_dir = path.join(process.cwd(), 'files_copy');

  try {
    // Проверяем существует ли папка `files`
    await fs.access(files_dir);
  } catch {
    throw new Error('FS operation failed');
  }

  try {
    // Проверяем существует ли папка `files_copy`
    await fs.access(files_copy_dir);
    throw new Error('FS operation failed');
  } catch {
    // Папка не существует - все ОК
  }

  await fs.mkdir(files_copy_dir);

  await copyFilesRecursive(files_dir, files_copy_dir);
};

await copy();
