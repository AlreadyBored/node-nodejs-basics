export class RenameError extends Error {
  constructor(cause, message = 'FS operation failed') {
    super(message);
    this.cause = cause;
    this.name = 'ERROR [Rename]';
    this.message = message;
  }
}
