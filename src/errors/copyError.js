export class CopyError extends Error {
    constructor(cause, message = 'FS operation failed') {
        super(message);
        this.cause = cause;
        this.name = 'ERROR [Copy]';
        this.message = message;
    }
}