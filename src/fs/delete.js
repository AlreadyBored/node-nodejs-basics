import fs from 'fs';

export const remove = async () => {
    // Write your code here
    const path = 'src/fs/files/fresh.txt';

    if (fs.existsSync(path)) {
        fs.unlinkSync(path);
    } else {
        console.error(new Error("FS operation failed"))
    }

};

remove();
