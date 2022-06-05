export class ReadError extends Error {
  constructor(cause, message = 'FS operation failed') {
    super(message);
    this.cause = cause;
    this.name = 'ERROR [Read]';
    this.message = message;
  }
}
