const zlib = require('zlib');
const fs = require('fs');

const gzip = zlib.createGzip();
const inp = fs.createReadStream('./newTest.txt');
const out = fs.createWriteStream('newTest.txt.gz');

inp.pipe(gzip).pipe(out);
