
export const parseEnv = () => {
    process.env['RSS_1'] = 'first';
    process.env['RSS_2'] = 'second';
    console.log('RSS_1 = ', process.env.RSS_1,',', 'RSS_2 =', process.env.RSS_2);
};
