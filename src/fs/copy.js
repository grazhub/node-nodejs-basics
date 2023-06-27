import { readdir, mkdir, copyFile } from 'fs/promises';
import { getAbsolutePath } from '../utils.js';

const currentFileURL = import.meta.url;

const copiesDirPath = getAbsolutePath('./files_copy', currentFileURL);
const originDirPath = getAbsolutePath('./files', currentFileURL);

const copy = async () => {
    try {
		const [files] = await Promise.all([readdir(originDirPath), mkdir(copiesDirPath)]);
		const filePromises = files.map(fileName => copyFile(`${originDirPath}/${fileName}`, `${copiesDirPath}/${fileName}`));
		await Promise.all(filePromises);
	} catch (error) {
		console.log(error);
		throw new Error('FS operation failed');
	}
};

await copy();
