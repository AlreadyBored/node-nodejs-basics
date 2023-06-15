export class FsError extends Error {
    constructor () {
        super('FS operation failed');
    }
}
