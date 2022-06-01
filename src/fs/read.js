import { readFile } from "fs/promises";

export const read = async () => {
  const fileName = "./files/fileToRead1.txt";
  const errMess = `FS operation failed`;
  try {
    const controller = new AbortController();
    const signal = await controller.signal;
    const promise = readFile(fileName, { signal });
    const str = await promise;
    console.log(str.toString());
    controller.abort();
  } catch (err) {
    if (err.messange === undefined) {
      console.error(errMess);
    }
  }
};
read();
