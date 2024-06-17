import { App } from './app';
import dotenv from 'dotenv';

dotenv.config();

async function main() {
    const app = new App(5000);
    await app.listen();
}

main();