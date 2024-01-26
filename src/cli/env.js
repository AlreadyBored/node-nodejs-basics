import fs from 'fs';
import path from 'path';

const parseEnv = () => {
    const __dirname = path.dirname(new URL(import.meta.url).pathname);
    const envPath = path.resolve(__dirname, '../..', '.env');
   
    try {
        const envVariables = fs.readFileSync(envPath, 'utf-8');
        const eachVariableLines = envVariables.split('\n');

        for (const variable of eachVariableLines) {
            if(variable.trim().startsWith('RSS_')) {
                const [key, value] = variable.trim().split('=');
                process.env[key] = value;
                console.log(`${key}=${value}`);
            }
        }
    } catch (error) {
        console.error('error during parsing: ', error);
    }
    
};

parseEnv();