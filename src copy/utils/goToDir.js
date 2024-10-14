import path from 'node:path';
import { stat, access } from 'fs/promises';
import { homedir } from 'node:os';

export const goToDir = async (currentPath, destinationPath = '') => {
    let newPath = path.resolve(currentPath, destinationPath)
    const relative = path.relative(homedir(), newPath);

    if (relative && relative.startsWith('..')) return currentPath;
    try {
        const stats = await stat(newPath)
        if (stats.isDirectory()) {
            newPath = path.resolve(currentPath, destinationPath);
            try {
                await access(newPath);
                return newPath
            } catch (e) {
                console.error("This directory isn't created")
                return currentPath
            }
        } else {
            console.error("\nIt's not directory")
            return currentPath
        }
    } catch(e) {
        console.error(e.message)
        return currentPath
    }
}