import fs from "fs";

export const copy = async () => {
    fs.readdir('./files', (err, files) => {
        if (err?.code === 'ENOENT') {
            throw "FS operation has failed";
        }
        fs.access('./copy-files', (err) => {
            if (err) {
                // console.log("Directory does not exist.")
            } else {
                throw "FS operation failed";
            }
            fs.mkdir('./copy-files', (err) => {
                files.forEach(file => {
                    fs.copyFile(`./files/${file}`, `./copy-files/${file}`, (err) => {
                    })
                })
            })

        });
    })
};
copy();