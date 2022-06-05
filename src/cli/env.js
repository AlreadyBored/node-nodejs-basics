export const parseEnv = () => {
    const envProps = process.env;

    for (let prop in envProps) {
        if (prop.match(/^RSS_/)) {
            console.log(`${prop} = ${envProps[prop]}`);
        }
    }
};