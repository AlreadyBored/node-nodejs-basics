import { rename, existsSync } from 'fs';

const newname = async (oldName, newName) => {

    try {
      if (!existsSync(oldName) || existsSync(newName)) {
        throw 'FS operation failed';
    }

    rename(oldName, newName, (err) => {
        if (err) throw err;
        console.log('Rename complete!');
      });
} catch (err) {
    console.error(err);
}
};

await newname('./files/wrongFilename.txt', './files/properFilename.md');
// await newname('./files/wrongFilename.txt', './files/properFilename.md');
// await newname('./files/properFilename.md', './files/wrongFilename.txt');