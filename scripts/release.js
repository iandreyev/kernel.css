"use strict";

const fs = require('fs');
const minifier = require('minifier');

if (!fs.existsSync('./release')) {
	fs.mkdirSync('./release');
}

minifier.on('error', (err) => {
	console.error(err);
});

minifier.minify('./build/kernel.css', {output: './release/kernel.min.css'});
fs.createReadStream('./build/kernel.css').pipe(fs.createWriteStream('./release/kernel.css'));
fs.createReadStream('./js/kernel.js').pipe(fs.createWriteStream('./release/kernel.js'));
