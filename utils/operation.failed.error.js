export class OperationFailedError extends Error {
    constructor (message = 'FS operation failed') {
        super(message)
        this.name = this.constructor.name;

        Error.captureStackTrace(this, this.constructor);
    }
}