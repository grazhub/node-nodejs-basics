import { writeFile } from 'fs/promises';
import { getAbsolutePath } from '../utils.js';

const filePath = getAbsolutePath('./files/fresh.txt', import.meta.url);
const fileContent = 'I am fresh and young';

const create = async () => { 
	try {
		const data = new Uint8Array(Buffer.from(fileContent));
		await writeFile(filePath, data, { flag: 'wx' });
	} catch (error) {
		console.log(error);
		throw new Error('FS operation failed');
	}
};

await create();