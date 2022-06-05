async function printErorr(error) {
    try {
        if (error) throw new Error('FS operation failed');
    } catch (error) {
        console.error(error.message);
    }
}

export const _printErorr = printErorr;