import { createWriteStream } from 'fs';
import { pipeline } from 'stream/promises';
import { getAbsolutePath } from '../utils.js';

const filePath = getAbsolutePath('./files/fileToWrite.txt', import.meta.url);

const write = async () => {
    const writableStream = createWriteStream(filePath, { flags : 'a' });
	await pipeline(process.stdin, writableStream);
};

await write();