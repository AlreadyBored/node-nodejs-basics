export class CreateError extends Error {
    constructor(cause, message = 'FS operation failed') {
      super(message);
      this.cause = cause;
      this.name = 'ERROR [Create]';
      this.message = message;
    }
}