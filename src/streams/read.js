import { createReadStream  } from 'fs';
import path from "path";
import { pipeline } from 'stream';

const read = async () => {
    const filePath = path.join(process.cwd(), 'src/fs/files/fileToRead.txt');

    const stream = createReadStream(filePath);

    pipeline(stream, process.stdout, (error) => {
            if (error) {
                console.error(error.message);
            }
        }
    )
};

await read();