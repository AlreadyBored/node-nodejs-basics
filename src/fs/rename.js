import fs from "fs"

const rename = async () => {
    const exists = fs.existsSync('src/fs/files/properFilename.md');
    if (!exists) {
    try {
    await fs.promises.rename('src/fs/files/wrongFilename.txt', 'src/fs/files/properFilename.md')
    } catch (error) {
        console.error('FS operation failed')
    }
} else {
    console.error('FS operation failed')
}
};

await rename();