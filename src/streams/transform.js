import { stdout, stdin } from 'process';
 
export const transform = async () => {
    stdin.pipe(stdout);
};

transform();