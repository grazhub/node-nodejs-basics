import { createReadStream, createWriteStream } from 'fs';
import { pipeline } from 'stream/promises';
import { createGunzip } from 'zlib';
import { getAbsolutePath } from '../utils.js';

const currentFileURL = import.meta.url;
const filePath = getAbsolutePath('./files/fileToCompress.txt', currentFileURL);
const archiveFilePath = getAbsolutePath('./files/archive.gz', currentFileURL);

const decompress = async () => {
    await pipeline(createReadStream(archiveFilePath), createGunzip(), createWriteStream(filePath));
};

await decompress();