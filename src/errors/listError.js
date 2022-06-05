export class ListError extends Error {
  constructor(cause, message = 'FS operation failed') {
    super(message);
    this.cause = cause;
    this.name = 'ERROR [List]';
    this.message = message;
  }
}
