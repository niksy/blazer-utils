'use strict';

const sassTrue = require('sass-true');

sassTrue.runSass({
	file: './test/index.scss'
}, describe, it);
