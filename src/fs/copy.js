import fs from 'fs';
import path from 'path';
const copy = async () => {
    const folder = './files'
    const destinationFolder = 'files_copy'

    // if (!fs.existsSync(folder)) {
    //     throw new Error('FS operation failed');
    // }
    // if (!fs.existsSync(destinationFolder)) {
    //     throw new Error('FS operation failed');
    // }
    fs.mkdirSync(destinationFolder)
    const files = fs.readdirSync(folder);
    for (const file of files) {
        const sourcePath = path.join(folder, file);
        const destinationPath = path.join(destinationFolder, file);
        fs.copyFileSync(sourcePath, destinationPath);
    }
};

await copy();
// let fs = require('fs/promises')
// let path = require('path')
// let dir = path.join(__dirname, 'files')
// let copyDir = path.join(__dirname, 'files-copy')

// fs.rm(copyDir, {
//     recursive: true,
//     force: true
// }).finally(function () {
//     fs.mkdir(copyDir, {
//         recursive: true
//     })
//     fs.readdir(dir, {
//         withFileTypes: true
//     }).then(function (data) {
//         data.forEach(function (item) {
//             if (item.isFile()) {
//                 let pathItem = path.join(dir, item.name)
//                 let pathItemFile = path.join(copyDir, item.name)
//                 fs.copyFile(pathItem, pathItemFile)
//             }
//         })
//     })
// })