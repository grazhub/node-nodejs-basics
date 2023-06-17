import { createReadStream } from 'fs';
import { pipeline } from 'stream/promises';
import { fileURLToPath } from 'url';

const fileURL = new URL('./files/fileToRead.txt', import.meta.url);
const filePath = fileURLToPath(fileURL);

const read = async () => {
    const readableStream = createReadStream(filePath);
	await pipeline(readableStream, process.stdout);
};

await read();