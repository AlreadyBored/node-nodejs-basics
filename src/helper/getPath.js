import url from "url";
import path from "path";

export default (meta, ...paths) => {
  return path.join(path.dirname(url.fileURLToPath(meta.url)), ...paths);
};
