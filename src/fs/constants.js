import { fileURLToPath } from "url";
import { dirname } from "path";

export const ERROR_MESSAGES = 'FS operation failed';
export const SUCCESSFULLY_MESSAGE = 'operation successfully';

const __filename = fileURLToPath(import.meta.url);
export const __DIR_NAME = dirname(__filename);