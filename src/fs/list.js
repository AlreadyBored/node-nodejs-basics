import fs from "fs";


const list = async () => {
    // Write your code here
    const files = fs.readdirSync('./files');

    files.forEach((file) => {
        console.log(file);
    })
};

await list();