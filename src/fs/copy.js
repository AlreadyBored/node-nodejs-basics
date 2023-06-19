import fs from 'fs';

const destDir = "./src/fs/files_copy";
const srcDir = "./src/fs/files";

const copy = async () => {
    if (fs.existsSync(destDir) || !fs.existsSync(srcDir)) {
        throw new Error("FS operation failed");
    } else {
        fs.mkdirSync(destDir, {recursive: true});
    }
    fs.cp(srcDir, destDir, {recursive: true}, function(err) {
        if (err) throw err;
        console.log("Operation has been done successfully");
    });

};

await copy();
