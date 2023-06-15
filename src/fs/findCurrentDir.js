import { dirname } from "path";

export const currentDir = dirname(new URL(import.meta.url).pathname).replace(
  /^\/([A-Za-z]:)/,
  "$1"
);
