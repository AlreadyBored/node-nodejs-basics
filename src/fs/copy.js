import { access }  from "fs";
import { cp } from "fs/promises";
import errorHandler from "./errorHandler.js";

const source = './files'
const destination = './files_copy'

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
