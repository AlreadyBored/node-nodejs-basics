const fs = require('fs');
const path = require('path');

const moveFile = (src, dest) => {
  const sourcePath = path.resolve(src);
  const destinationPath = path.resolve(dest);

  // Проверяем существование исходного файла
  fs.access(sourcePath, fs.constants.F_OK, (err) => {
    if (err) {
      console.log('Operation failed: Source file does not exist');
      return;
    }

    // Копируем файл с использованием потоков
    const readStream = fs.createReadStream(sourcePath);
    const writeStream = fs.createWriteStream(destinationPath);

    readStream.pipe(writeStream)
      .on('finish', () => {
        // После копирования удаляем исходный файл
        fs.unlink(sourcePath, (err) => {
          if (err) {
            console.log('Operation failed: Unable to delete source file');
          } else {
            console.log(`File moved successfully from ${src} to ${dest}`);
          }
        });
      })
      .on('error', (err) => {
        console.log('Operation failed while moving file:', err.message);
      });
  });
};

module.exports = { moveFile };
