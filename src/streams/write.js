import { createWriteStream } from 'fs';
import { pipeline } from 'stream/promises';
import { fileURLToPath } from 'url';

const fileURL = new URL('./files/fileToWrite.txt', import.meta.url);
const filePath = fileURLToPath(fileURL);

const write = async () => {
    const writableStream = createWriteStream(filePath, { flags : 'a' });
	await pipeline(process.stdin, writableStream);
};

await write();