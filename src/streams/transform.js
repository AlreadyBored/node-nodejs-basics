import { pipeline, Transform } from 'stream';
import { errorMessage } from '../common/constants.js';

export const transform = async () => {
    const getCorrectStr = (chunk) => {
        const strToArray = chunk.toString('utf-8').split('');
        const splitedIndents = strToArray.splice(-2, 2);
        strToArray.reverse().push(...splitedIndents);
        return strToArray.join('');
    }

    const transFormStream = new Transform({
        transform(chunk, encoding, result) {
            try {
              result(null, getCorrectStr(chunk));
            } catch (err) {
              result(err);
            }
          }
    })

    pipeline(
      process.stdin,
      transFormStream,
      process.stdout,
      (err) => {
        if(err) throw new Error(errorMessage);
    })
};

transform()