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
