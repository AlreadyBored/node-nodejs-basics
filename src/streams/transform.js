import { stdin, stdout } from 'process';
import { Transform } from 'stream';

export const transform = async () => {
   const data = JSON.stringify(stdin);
    const reverseStream = new Transform(data);
    reverseStream._transform = (data) => data.split("").reverse().join("");

    await stdout.write(reverseStream._transform(data));
};
