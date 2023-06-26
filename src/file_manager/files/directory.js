import { homedir } from 'os';
import fs from 'fs/promises';
import { join } from 'path';

const changeDirectory = (path) => {
    if(!path) {
        changeDirectory(homedir());
        return;
    }

    try {
        process.chdir(path);
        console.log(`You are currently in ${process.cwd()}`)
    } catch (err) {
        console.log('Operation failed', err)
    }

}

const printLsInfo = async () => {
    console.log('PRINT INFO')
    try {
        console.log(process.cwd())
        const files = await fs.readdir(process.cwd(), { withFileTypes: true });
        const data = [];
        for (const file of files) {
            data.push({ Name: file.name, Type: file.isDirectory() ? 'directory' : 'file' });
        }

        console.table(data);
    } catch (e) {
        console.log(e)
    }
}

const goUp = () => {
    const currentDir = process.cwd();

    if (currentDir === homedir()) {
        return;
    }

    const newDir = join(currentDir, '../');
    changeDirectory(newDir);
}

export {goUp, printLsInfo, changeDirectory}
