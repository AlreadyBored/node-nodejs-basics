export const getURLPath = (relativePath) =>
  new URL(relativePath, import.meta.url);
