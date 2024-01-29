const list = async () => {
    try {
        const {
            readdirSync
        } = await import('fs');
        const {
            join
        } = await import('path');
        const filesPath = join('.', 'files');
        const filenames = readdirSync(filesPath);
        console.log(filenames);
    } catch (error) {
        throw new Error('FS operation failed');
    }
};

await list();

/* list.js - implement function that prints
* all array of filenames from files folder into console
* (if files folder doesn't exists Error with message
* FS operation failed must be thrown) */
