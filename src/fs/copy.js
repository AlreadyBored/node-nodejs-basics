import fs from 'fs';

const copy = async () => {
  const sourceFolder = 'src/fs/files';
  const targetFolder = 'src/fs/files_copy';

  if(fs.existsSync(sourceFolder) && !fs.existsSync(targetFolder)){
    fs.mkdirSync(targetFolder);
    const filesList = fs.readdirSync(sourceFolder, () => {});
    filesList.map(item => fs.copyFile(sourceFolder + '/' + item, targetFolder + '/' + item, () => {}));
  } else {
    console.error('\x1b[31m%s\x1b[0m', new Error('FS operation failed'));
  }
};

await copy();
