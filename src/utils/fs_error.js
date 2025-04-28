export class FSError extends Error {
    constructor(...args) {
        super(...args);
        this.message = 'FS operation failed';
    }
};
