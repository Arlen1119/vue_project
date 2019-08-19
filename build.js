const fs = require('fs');
const archiver = require('archiver');

console.log(process.env);
const output = fs.createWriteStream('dist.zip');
const archive = archiver('zip');

archive.on('error', (err) => {
  throw err;
});

archive.pipe(output);
archive.directory('dist/');
archive.finalize();
