import path from 'node:path'
import { homedir } from 'node:os';


export const getUpperDir = (currentPath) => {
    const upperDir = path.resolve('..', currentPath);
    if (upperDir === homedir()) return currentPath;

    return upperDir
}