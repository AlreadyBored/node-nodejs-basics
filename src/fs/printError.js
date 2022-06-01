async function printErorr(error) {
    try {
        if (error) throw error;
    } catch (error) {
        console.error('FS operation failed');
    }
}

export const _printErorr = printErorr;