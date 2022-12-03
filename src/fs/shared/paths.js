import path from "path";

export const paths = {
    files: path.resolve('src/fs/files'),
    copyFolder: path.resolve('src/fs/files_copy'),
    read: path.resolve('src/fs/files/fileToRead.txt'),
    create: path.resolve('src/fs/files/fresh.txt'),
    delete: path.resolve('src/fs/files/fileToRemove.txt'),
    renameBefore: path.resolve('src/fs/files/wrongFilename.txt'),
    renameAfter: path.resolve('src/fs/files/properFilename.md'),
}