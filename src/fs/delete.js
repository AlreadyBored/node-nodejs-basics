import { unlinkSync, existsSync } from 'fs';
const remove = async () => {
    const fileWhatDelete = './files/fileToRemove.txt';
    if (!existsSync(fileWhatDelete)) {
        console.error("FS operation failed")
    } else {
        await unlinkSync(fileWhatDelete);
    }
};

await remove();

/* implement function that deletes file fileToRemove.txt
* (if there's no file fileToRemove.txt Error with message
*  FS operation failed must be thrown)
*/
// https://github.com/AlreadyBored/nodejs-assignments/blob/main/assignments/nodejs-basics/assignment.md
