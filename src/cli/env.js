import { access } from 'fs/promises';
import path from "path";

const parseEnv = () => {
    const envVars = process.env;

    const envVarsArray = []

    for (const field in envVars) {
        if (field.startsWith('RSS_')) {
            const envStr = `${field}=${envVars[field]}`
            envVarsArray.push(envStr);
        }
    }

    console.log(envVarsArray.join('; '));
};

parseEnv();