
import app from './app';
import '@babel/polyfill';

async function main () {
    await app.listen(5000);
    console.log('Server on port 5000');
};

main();