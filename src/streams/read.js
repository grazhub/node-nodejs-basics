import { createReadStream } from 'fs';
import { pipeline } from 'stream/promises';
import { getAbsolutePath } from '../utils.js';

const filePath = getAbsolutePath('./files/fileToRead.txt', import.meta.url);

const read = async () => {
    const readableStream = createReadStream(filePath);
	await pipeline(readableStream, process.stdout);
};

await read();