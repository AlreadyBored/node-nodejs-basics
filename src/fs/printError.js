async function printErorr(error) {
    try {
        if (error) throw error;
    } catch (error) {
        console.log('FS operation failed');
    }
}

export const _printErorr = printErorr;