import { createRequire } from 'module'
var require = createRequire(import.meta.url);
var localeFile = require('../locale/en/index.json')
console.log(localeFile);