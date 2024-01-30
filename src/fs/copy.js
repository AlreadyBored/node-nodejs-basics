import { access }  from "fs";
import { cp } from "fs/promises";
import errorHandler from "./errorHandler.js";

const source = new URL('./files', import.meta.url)
const destination = new URL('./files_copy', import.meta.url)

const copy = async () => {
    const copyCallback = () =>
        access(destination, (err) => {
            err ?
                cp(source, destination, {recursive: true})
                : errorHandler()
        })

    access(source, (err) => {
        err ? errorHandler() : copyCallback()
    })
};

await copy();
