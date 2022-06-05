export class DeleteError extends Error {
    constructor(cause, message = 'FS operation failed') {
      super(message);
      this.cause = cause;
      this.name = 'ERROR [Delete]';
      this.message = message;
    }
}