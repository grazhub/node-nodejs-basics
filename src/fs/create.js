import { writeFile } from 'fs/promises';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';

const currentFilePath = fileURLToPath(import.meta.url);
const currentDirPath = dirname(currentFilePath);

const fileRelativePath = './files/fresh.txt';
const fileContent = 'I am fresh and young';

const create = async () => { 
	try {
		const data = new Uint8Array(Buffer.from(fileContent));
		await writeFile(resolve(currentDirPath ,fileRelativePath), data, { flag: 'wx' });
	} catch (error) {
		console.log(error);
		throw new Error('FS operation failed');
	}
};

await create();