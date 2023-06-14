import { readFile } from 'fs/promises';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';

const currentDirPath = dirname(fileURLToPath(import.meta.url));

const fileRelativePath = './files/fileToRead.txt';

const read = async () => {
    try {
		const content = await readFile(resolve(currentDirPath, fileRelativePath), { encoding: 'utf8' });
		console.log(content);
	} catch (error) {
		console.log(error);
		throw new Error('FS operation failed');
	} 
};

await read();