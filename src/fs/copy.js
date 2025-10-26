import fs from 'fs/promises';
import path from 'path';

const copy = async () => {
  const srcFolder = path.join('src', 'fs', 'files');
  const destFolder = path.join('src', 'fs', 'files_copy');

  try {
    await fs.access(srcFolder);

    try {
      await fs.access(destFolder);
      throw new Error('FS operation failed');
    } catch {

    }

    await fs.mkdir(destFolder);

    // Читаем список файлов в исходной папке
    const items = await fs.readdir(srcFolder, { withFileTypes: true });

    for (const item of items) {
      if (item.isFile()) { // копируем только файлы
        const srcPath = path.join(srcFolder, item.name);
        const destPath = path.join(destFolder, item.name);
        await fs.copyFile(srcPath, destPath);
      }
    }

    console.log('Папка скопирована');

  } catch {
    throw new Error('FS operation failed');
  }
};

await copy();
